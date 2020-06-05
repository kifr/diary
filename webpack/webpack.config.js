const path = require("path");
const BabelMinifyPlugin = require("babel-minify-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const outputPath = path.resolve(__dirname, "../dist/client/");

module.exports = {
  entry: path.resolve(__dirname, "../src/client/index.tsx"),
  output: {
    path: outputPath,
    filename: "main.js"
  },
  resolve: {
    modules: [
      path.resolve(__dirname, "../node_modules")
    ],
    extensions: [".ts", ".tsx", ".js"]
  },
  plugins: [
    new BabelMinifyPlugin(),
    new HtmlWebpackPlugin({
      publicPath: "dist",
      filename: "index.html",
      template: "src/client/index.html",
      minify: true
    }),
  ],
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.tsx?/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
        test: [/\.tsx?$/, /\.js$/],
        exclude: /node_modules/,
        use: [
          "babel-loader",
          {
            loader: "ts-loader",
            options: {
              configFile: path.resolve(__dirname, "../src/client/tsconfig.json"),
            }
          }
        ],
      },
    ],
  },
};
