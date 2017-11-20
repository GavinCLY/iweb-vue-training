const express = require('express')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config.js')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
let app = express()

let compiler = webpack(webpackConfig)
app.use(webpackDevMiddleware(compiler, {

}))
app.use(webpackHotMiddleware(compiler, {

}))

console.log('server start at http://localhost:8000')
app.listen(8000)
