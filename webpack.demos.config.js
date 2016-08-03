'use strict';

var path = require('path');

var demos = path.join(__dirname, 'demos');

module.exports = {
  devtool: 'eval',
  entry: {
    'demos/presets/index': path.join(demos, 'presets/index.jsx'),
    'demos/simple/index': path.join(demos, 'simple/index.jsx')
  },
  output: {
    path: './',
    filename: '[name].js'
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
