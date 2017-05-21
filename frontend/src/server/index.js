/* global webpackIsomorphicTools, __PRODUCTION__ */
/* eslint no-console: [2, { allow: ["log"] }] */
import { trigger } from "redial";
import path from "path";
import _ from "lodash";
import locale from "locale";
import Express from "express";
import bodyParser from "body-parser";
import React from "react";
import { AppContainer } from "react-hot-loader";
import ReactDOM from "react-dom/server";
import { createMemoryHistory, RouterContext, match } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import { Provider } from "react-redux";
import http from "http";
import httpProxy from "http-proxy";
import favicon from "serve-favicon";
import compression from "compression";
import configureStore from "../common/store";
import routesContainer from "../common/routes";
import Html from "./containers/Html/index";
import ApiClient from "../common/helpers/ApiClient";
import config from "../common/config";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

const targetUrl = `http://${config.apiHost}:${config.apiPort}`;

const supportedLocales = ["en", "en_US"];
const port = process.env.PORT || 3000;
const app = new Express();
const server = new http.Server(app);
const proxy = httpProxy.createProxyServer({
  target: targetUrl,
  changeOrigin: true
});

app.use("/api", (req, res) => {
  proxy.web(req, res, { target: targetUrl });
});

app.use(compression());
app.use(favicon(path.resolve("static/favicon.ico")));

const publicPath = path.resolve("static");
const content = path.resolve("content");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(locale(supportedLocales));
app.use(Express.static(publicPath));
app.use(Express.static(content));

let routes;
let store;

app.use((req, res, next) => {
  const location = req.url;

  const memoryHistory = createMemoryHistory(location);
  const client = new ApiClient(req);
  store = configureStore(memoryHistory, client);
  routes = routesContainer(store);

  const history = syncHistoryWithStore(memoryHistory, store);

  match(
    {
      history,
      routes,
      location: req.path
    },
    (error, redirectLocation, renderProps) => {
      if (redirectLocation) {
        res.redirect(redirectLocation.pathname + redirectLocation.search);
        return;
      }

      if (error || !renderProps) {
        next(error);
        return;
      }

      const { components } = renderProps;
      const locals = {
        path: renderProps.location.pathname,
        query: renderProps.location.query,
        params: renderProps.params,
        dispatch: store.dispatch,
        getState: store.getState
      };
      trigger("fetch", components, locals)
        .then(() => {
          try {
            const sheet = new ServerStyleSheet();
            const assets = webpackIsomorphicTools.assets();
            const content = ReactDOM.renderToString(
              sheet.collectStyles(
                <AppContainer>
                  <Provider store={store}>
                    <RouterContext {...renderProps} />
                  </Provider>
                </AppContainer>
              )
            );
            const css = sheet.getStyleTags();
            const markup = <Html assets={assets} store={store} content={content} css={css} />;

            const doctype = "<!doctype html>";
            const html = ReactDOM.renderToStaticMarkup(markup);

            const isNotFound = _.find(renderProps.routes, {
              name: "not-found"
            });

            res.status(isNotFound ? 404 : 200);
            res.send(doctype + html);
          } catch (err) {
            console.log(err);
            res.status(503);
          }
        })
        .catch(err => {
          console.log(err);
          res.status(503);
        });
    }
  );
});

if (!__PRODUCTION__ && module.hot) {
  console.log("[HMR] Waiting for server-side updates");

  module.hot.addStatusHandler(status => {
    if (status === "abort") {
      setTimeout(() => process.exit(0), 0);
    }
  });
}

server.listen(port, function() {
  console.log("Express server listening on port " + port);
});
