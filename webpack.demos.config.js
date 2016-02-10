'use strict';

var path = require('path');

var demos = path.join(__dirname, 'demos');

module.exports = {
  devtool: 'eval',
  entry: path.join(demos, 'index.jsx'),
  output: {
    path: demos,
    filename: 'index.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      exclude: /lib|node_modules/
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  eslint: {
    configFile: '.eslintrc'
  }
};
