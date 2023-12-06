// client.jsx와 분리코드(GuGuDan.jsx)를 합쳐주는 곳 : app.js로
const path = require('path');
// HTML Plugin 
const HtmlWebpackPlugin = require('html-webpack-plugin');
// outer CSS loader
const MiniCssExtractPlaugin = require('mini-css-extract-plugin');

module.exports = {
  name: 'GuGuDan Game',
  mode: 'development',
  devtool: 'eval',

  entry: {
    app: ['./client.jsx', './GuGuDan.jsx', './gugudan.css']
  },

  // jsx 연동시키는 babel 설치후 
 
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',      
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: [],
        },
      },
      {
        test: /\.css?/,
        // use: ['style-loader', 'css-loader'], // inernal css loader
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },

  output: {
    path: path.join(__dirname, 'dist'), // Node
    filename: 'app.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new MiniCssExtractPlaugin({
      filename: 'gugudan.css', 
    }),
  ],
  devServer : {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 8080,
  },
} 