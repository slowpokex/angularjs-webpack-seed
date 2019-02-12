const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const SOURCE_PATH = path.resolve(__dirname, 'src');
const DESTINATION_PATH = path.resolve(__dirname, 'build');

module.exports = {
  context: SOURCE_PATH,
  entry: './index.ts',
  output: {
    path: DESTINATION_PATH,
    filename: 'js/index.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: {
          loader: 'tslint-loader',
          options: {
            emitErrors: true
          }
        },
        enforce: 'pre'
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        loader: 'eslint-loader',
        enforce: 'pre'
      },
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: [
          'ng-annotate-loader',
          'awesome-typescript-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [
          'ng-annotate-loader',
          'babel-loader'
        ]
      },
    ]
  }
};
