import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import rootReducer from 'redux/reducer'
import clientMiddleware from 'helpers/promiseMiddleware'
/**
 * Return store
 *
 * @param {object} history History
 * @param {object} initialState Initial state for store
 * @return {object} Returns store with state
 */
export default function(history, client, initialState = {}) {
  let finalCreateStore
  if (process.env.NODE_ENV === 'development') {
    finalCreateStore = compose(
      applyMiddleware(clientMiddleware(client)),
      applyMiddleware(thunk),
      applyMiddleware(routerMiddleware(history)),
      typeof window === 'object' &&
      typeof window.devToolsExtension !== 'undefined'
        ? window.devToolsExtension()
        : f => f,
    )(createStore)
  } else {
    finalCreateStore = compose(
      applyMiddleware(clientMiddleware(client)),
      applyMiddleware(thunk),
      applyMiddleware(routerMiddleware(history)),
    )(createStore)
  }

  return finalCreateStore(rootReducer, initialState)
}
