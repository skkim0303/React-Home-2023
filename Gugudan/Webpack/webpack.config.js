const path = require('path');
// webpack 설정하는 모든 곳
module.exports = {
  name: 'gugudan setting',
  mode: 'development', // production경우 'hidden-source-map'
  // target: 'node',
  // externals: [nodeExternals()],
  devtool: 'eval',
  resolve: { // 확장자 생략 tool
    extensions: ['.js', '.jsx']
  },  

  entry: { // 입력할 파일들
    app: ['./client'],
  },

  module: {
    rules: [{ // 여러개 규칙 적용 가능
      test: /\.jsx?/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: [],
      },
    }],
  },

  output: { // 출력할 파일 -> app.js
    path: path.join(__dirname, 'dist'), // Node path명령어 맨위로 
    filename: 'app.js'
  },
};