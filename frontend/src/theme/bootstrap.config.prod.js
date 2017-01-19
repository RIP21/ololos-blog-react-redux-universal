const bootstrapConfig = require('./bootstrap.config.js');

const ExtractTextPlugin = require('extract-text-webpack-plugin'); //eslint-disable-line
bootstrapConfig.styleLoader = ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader');
module.exports = bootstrapConfig;

