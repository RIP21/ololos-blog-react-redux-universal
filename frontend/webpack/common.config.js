const path = require("path");
const WebpackIsomorphicToolsPlugin = require("webpack-isomorphic-tools/plugin");
const webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require("./isomorphic.config"));

module.exports = {
  cache: false,
  context: __dirname,
  stats: {
    colors: true,
    hasErrors: true,
    hasWarnings: true,
    reasons: true,
    errorDetails: true
  },
  resolve: {
    modules: ["src", "node_modules"],
    alias: {
      src: path.join(path.dirname(__dirname), "src")
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: {
          cacheDirectory: true,
          plugins: [
            "transform-decorators-legacy",
            "react-hot-loader/babel",
            [
              "styled-components",
              {
                ssr: true
              }
            ]
          ],
          presets: ["react", "latest", "stage-0"]
        },
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        test: webpackIsomorphicToolsPlugin.regular_expression("images"),
        loader: "url-loader",
        options: {
          limit: 1,
          name: "img/[hash].[ext]"
        }
      }
    ],
    noParse: /\.min\.js/
  },
  output: {
    publicPath: "/assets/"
  },
  node: {
    __dirname: true,
    fs: "empty"
  }
};
