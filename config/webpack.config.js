const path = require('path');
const BabelMinifyPlugin = require("babel-minify-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const outputPath = path.resolve(__dirname, '../dist');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '../src/client/index.tsx'),
  output: {
    path: outputPath,
    filename: 'main.js'
  },
  resolve: {
    modules: [
      path.resolve(__dirname, '../node_modules')
    ],
    extensions: ['.ts', '.tsx', '.js']
  },
  plugins: [
    new BabelMinifyPlugin(),
    new HtmlWebpackPlugin({
      publicPath: 'dist',
      filename: 'index.html',
      template: 'src/client/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: [/\.tsx?$/, /\.js$/],
        exclude: /node_modules/,
        loader: [
          'babel-loader',
          'ts-loader',
        ],
      },
    ],
  },
}
