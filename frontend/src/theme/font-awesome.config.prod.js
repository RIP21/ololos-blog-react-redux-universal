const fontAwesomeConfig = require('./font-awesome.config.js');

const ExtractTextPlugin = require('extract-text-webpack-plugin'); // eslint-disable-line
fontAwesomeConfig.styleLoader = ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader');
module.exports = fontAwesomeConfig;

