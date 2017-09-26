const path = require('path')
const Express = require('express')
const httpProxy = require('http-proxy')
const compression = require('compression')
const rendertron = require('rendertron-middleware')
const favicon = require('serve-favicon')

const targetUrl = `http://localhost:8080`
const app = new Express()

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
const proxy = httpProxy.createProxyServer({
  target: targetUrl,
  changeOrigin: true,
})

app.use('/api', (req, res) => {
  proxy.web(req, res, { target: targetUrl })
})

app.use(compression())

app.use(
  rendertron.makeMiddleware({
    proxyUrl: 'http://localhost:5000/render',
  }),
)

const publicPath = path.resolve('build')
const content = path.resolve('content')

app.use(Express.static(publicPath))
app.use(Express.static(content))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})

app.listen(3000)
