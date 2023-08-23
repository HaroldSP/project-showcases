const path = require('path')

module.exports = {
//   mode: 'none',
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    hot: true,
    static: {
      directory: './',
      watch: true
    }
  }
}
