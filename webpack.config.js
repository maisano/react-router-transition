'use strict';

const path = require('path');
const webpack = require('webpack');

const src = path.join(__dirname, 'src');

module.exports = {
  devtool: 'sourcemap',

  entry: path.join(src, 'index.js'),

  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
      },
    },
  ],

  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'react-router-transition.js',
    sourceMapFilename: 'react-router-transition.map',
    library: 'ReactRouterTransition',
    libraryTarget: 'umd',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: src,
      },
    ],
  },

  resolve: {
    modules: [
      src,
      'node_modules',
    ],
  },
};
