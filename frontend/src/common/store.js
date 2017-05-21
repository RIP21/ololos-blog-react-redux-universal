/* global window, __DEV__, __CLIENT__ */

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "react-router-redux";
import rootReducer from "../common/redux/reducer";
import clientMiddleware from "./helpers/promiseMiddleware";
/**
 * Return store
 *
 * @param {object} history History
 * @param {object} initialState Initial state for store
 * @return {object} Returns store with state
 */
export default function(history, client, initialState = {}) {
  let finalCreateStore;
  if (__DEV__ && __CLIENT__) {
    finalCreateStore = compose(
      applyMiddleware(clientMiddleware(client)),
      applyMiddleware(thunk),
      applyMiddleware(routerMiddleware(history)),
      typeof window === "object" && typeof window.devToolsExtension !== "undefined"
        ? window.devToolsExtension()
        : f => f
    )(createStore);
  } else {
    finalCreateStore = compose(
      applyMiddleware(clientMiddleware(client)),
      applyMiddleware(thunk),
      applyMiddleware(routerMiddleware(history))
    )(createStore);
  }

  const store = finalCreateStore(rootReducer, initialState);

  if (__DEV__ && module.hot) {
    module.hot.accept("../common/redux/reducer", () => {
      const nextRootReducer = require("../common/redux/reducer").default;
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
