import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker'

import configureStore from './store'
import routesContainer from './routes'
import ApiClient from 'helpers/ApiClient'
import ReactGA from 'react-ga'

const store = configureStore(browserHistory, new ApiClient())
const history = syncHistoryWithStore(browserHistory, store)
const routes = routesContainer(store)

ReactGA.initialize('UA-86360910-1') // Google Analytics with React

const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
  window.scrollTo(0, 0)
}

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history} onUpdate={logPageView}>
          {routes}
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()

setTimeout(() => {
  //Event to notify rendertron that page is done
  document
    .getElementById('root')
    .dispatchEvent(
      new Event('render-complete', { bubbles: true, composed: true }),
    )
}, 6000)
