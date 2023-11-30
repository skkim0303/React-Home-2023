// client.jsx와 분리코드(GuGuDan.jsx)를 합쳐주는 곳 : app.js로
const path = require('path');

module.exports = {
  name: 'GuGuDan Game',
  mode: 'development',
  devtool: 'eval',

  entry: {
    app: ['./client.jsx', './GuGuDan.jsx']
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
        use: ['css-loader', 'style-loader'],
      },
    ],
  },

  output: {
    path: path.join(__dirname, 'dist'), // Node
    filename: 'app.js'
  },
} 