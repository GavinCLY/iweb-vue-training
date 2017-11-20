const Webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlgin = require('html-webpack-plugin')

module.exports = {
  entry: {
    main: [
      'webpack-hot-middleware/client?path=__webpack_hmr',
      path.join(__dirname, 'src/main.js')
    ]
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    publicPath: ''
  },
  module: {
    rules: [
      {
        test: /\.vue/,
        use: ['vue-loader']
      },
      {
        test: /\.js/,
        use: ['babel-loader']
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(jpg|png)/,
        use: ['url-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlgin({
      template: path.join(__dirname, 'src/template.html'),
      filename: 'index.html',
      inject: true
    }),
    new Webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js'
    }
  }
}
