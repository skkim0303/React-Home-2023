const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  entry: {
    main: ['./src/wordRelay.js', './src/wordRelay.css'],     
  },
  module: {
    rules: [
      {
        test: /\.css?/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      }
    ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'wordRelay.css',
    }),
  ],
};