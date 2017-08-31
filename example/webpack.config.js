'use strict';

const path = require('path');
const webpack = require('webpack');

const src = path.join(__dirname, 'src');
const parentDir = path.join(__dirname, '../')

module.exports = {
  devtool: 'sourcemap',

  entry: path.join(src, 'index.js'),

  output: {
    path: __dirname,
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          src,
          parentDir,
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
    ],
  },

  resolve: {
    modules: [
      src,
      'node_modules',
    ],
  },

  resolveLoader: {
    modules: [
      'node_modules',
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    }),

    new webpack.ProvidePlugin({
      Glamor: 'glamor/react',
    }),
  ],
};
