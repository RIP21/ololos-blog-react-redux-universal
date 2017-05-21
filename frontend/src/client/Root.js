import React, { Component } from "react";
import { AppContainer } from "react-hot-loader";
import { trigger } from "redial";
import { Router, browserHistory, match } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import { Provider } from "react-redux";
import ReactGA from "react-ga";

import configureStore from "../common/store";
import routesContainer from "../common/routes";
import ApiClient from "../common/helpers/ApiClient";

const initialState = window.__INITIAL_STATE__;
const store = configureStore(browserHistory, new ApiClient(), initialState);
const history = syncHistoryWithStore(browserHistory, store);
const routes = routesContainer(store);
const { dispatch } = store;

ReactGA.initialize("UA-86360910-1"); // Google Analytics with React

const logPageView = () => {
  if (typeof window !== "undefined") {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
    window.scrollTo(0, 0);
  }
};

history.listen(location => {
  match({ routes, location, history }, (error, redirectLocation, renderProps) => {
    if (renderProps) {
      const { components } = renderProps;
      const locals = {
        path: renderProps.location.pathname,
        query: renderProps.location.query,
        params: renderProps.params,
        store,
        dispatch,
        getState: store.getState
      };

      if (window.__INITIAL_STATE__) {
        delete window.__INITIAL_STATE__;
      } else {
        trigger("fetch", components, locals);
      }

      trigger("defer", components, locals);
    }
  });
});

export default class Root extends Component {
  render() {
    return (
      <AppContainer>
        <Provider store={store}>
          <Router history={history} onUpdate={logPageView}>
            {routes}
          </Router>
        </Provider>
      </AppContainer>
    );
  }
}
