const webpack = require('webpack')
const path = require('path')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const p = process.env.NODE_ENV === 'production'

module.exports = {
  target: 'web',
  devtool: 'source-map',
  entry: path.join(__dirname, 'js/index.js'),
  output: {
    path: path.join(__dirname, 'theme/assets'),
    filename: 'index.js',
    publicPath: '/'
  },
  externals: '',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js?$/,
        loader: 'standard-loader',
        exclude: /node_modules/,
        options: {
          parser: 'babel-eslint'
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'js'),
        loaders: ['babel-loader']
      },
    ]
  },
  resolve: {
    alias: {
      Components: path.join(__dirname, 'js/components'),
      Demos: path.join(__dirname, 'js/demos'),
      Pages: path.join(__dirname, 'js/pages'),
      Icons: path.join(__dirname, 'js/icons'),
      Util: path.join(__dirname, 'js/util'),
      Root: path.join(__dirname, 'js/')
    }
  },
  plugins: p ? [
    new LodashModuleReplacementPlugin,
    new webpack.optimize.OccurrenceOrderPlugin()
  ] : []
}
