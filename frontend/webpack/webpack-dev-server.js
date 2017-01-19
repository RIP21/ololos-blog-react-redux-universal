var webpack = require('webpack');
var chalk = require('chalk');
var formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');
var clearConsole = require('react-dev-utils/clearConsole');
var WebpackDevServer = require('webpack-dev-server');

var config = require('../src/config');
var webpackConfig = require('./dev.config');
var compiler = webpack(webpackConfig);

// Show message when Webpack is recompiling the bundle
compiler.plugin('invalid', function() {
  clearConsole();
  console.log(chalk.blue('Compiling…'));
});

// Custom error reporting
compiler.plugin('done', function(stats) {
  clearConsole();

  // We have switched off the default Webpack output in WebpackDevServer
  // options so we are going to "massage" the warnings and errors and present
  // them in a readable focused way.
  var messages = formatWebpackMessages(stats.toJson({}, true));
  if (!messages.errors.length && !messages.warnings.length) {
    console.log(chalk.green('Compiled successfully!'));
    console.log();
    console.log('The app is running at:');
    console.log();
    console.log(`  ${chalk.cyan(host + ':' + config.port + '/')}`);
    console.log(`  ${chalk.yellow('Watch server')} is running, talking to API server on port ${chalk.cyan(config.apiPort)}`);
    console.log();
    console.log('Note that the development build is not optimized.');
    console.log(`To create a production build, use ${chalk.cyan('npm run build')}.`);
    console.log();
  }

  // If errors exist, only show errors.
  if (messages.errors.length) {
    //clearConsole();
    console.log(chalk.red('Failed to compile.'));
    console.log();
    messages.errors.forEach(message => {
      console.log(message);
      console.log();
    });
    return;
  }

  // Show warnings if no errors were found.
  if (messages.warnings.length) {
    console.log(chalk.yellow('Compiled with warnings.'));
    console.log();
    messages.warnings.forEach(message => {
      console.log(message);
      console.log();
    });
    // Teach some ESLint tricks.
    console.log('You may use special comments to disable some warnings.');
    console.log(`Use ${chalk.yellow('// eslint-disable-next-line')} to ignore the next line.`);
    console.log(`Use ${chalk.yellow('/* eslint-disable */')} to ignore all warnings in a file.`);
  }
});

var host = config.host || 'localhost';
var port = (Number(config.port) + 1) || 3001;
var devServer = new WebpackDevServer(compiler, { //TODO: Fix problems with WebpackDevServer
  compress: true,
  contentBase: 'http://' + host + ':' + port,
  clientLogLevel: 'none',
  quiet: true,
  watchOptions: {
    ignored: /node_modules/,
  },
  noInfo: true,
  hot: true,
  inline: true,
  lazy: false,
  publicPath: webpackConfig.output.publicPath,
  headers: {'Access-Control-Allow-Origin': '*'},
  stats: {colors: true}
});



devServer.listen(port, (err, result) => {
  if (err) {
    return console.log(err);
  }

  clearConsole();
  console.log(chalk.cyan('Starting the development server...'));
  console.log();
});

