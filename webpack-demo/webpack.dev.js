const merge = require('webpack-merge')
const common = require('./webpack.common')
const webpack = require('webpack')
module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: false,
    hot: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
})