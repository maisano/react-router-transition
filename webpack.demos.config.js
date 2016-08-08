'use strict';

var path = require('path');
var demos = path.join(__dirname, 'demos');

module.exports = {
  devtool: 'eval-source-map',
  entry: {
    presets: path.join(demos, 'presets/index.jsx'),
    simple: path.join(demos, 'simple/index.jsx')
  },
  output: {
    path: './demos',
    filename: '[name]/index.js',
    publicPath: '/'
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
  },
  devServer: {
    contentBase: './demos',
    noInfo: false,
    hot: false,
    inline: true
  }
};
