const rewireEslint = require('./rewires/eslint')
const rewireSc = require('react-app-rewire-styled-components')
const rewireResolve = require('./rewires/resolve')

module.exports = function override(config, env) {
  rewireResolve(config)
  rewireEslint(config)
  config.module.rules[1].oneOf[0].options.limit = 1 //To stop img inlining (for Twitter etc integraions)
  rewireSc(config, env, {
    displayName: true,
  })
  return config
}
