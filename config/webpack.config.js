const path = require('path');
const BabelMinifyPlugin = require("babel-minify-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '../src/client/index.tsx'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'main.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    port: 8080,
    historyApiFallback: true, // without no routing
  },
  resolve: {
    modules: [path.resolve(__dirname, '../src'), path.resolve(__dirname, '../node_modules')],
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: [/\.ts$/, /\.tsx$/, /\.js$/],
        exclude: /node_modules/,
        loader: [
          'babel-loader',
          'ts-loader',
        ],
      },
    ],
  },
  plugins: [
    new BabelMinifyPlugin(),
    new HtmlWebpackPlugin({
      publicPath: 'dist',
      filename: 'index.html',
      template: 'src/client/index.html',
    }),
  ],
}
