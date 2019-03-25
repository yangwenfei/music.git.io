const merge = require('webpack-merge')
const common = require('./webpack.common')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
module.exports = merge(common, {
  devtool: 'source-map',
  plugins: [
    new UglifyJSPlugin({ //压缩插件
      sourceMap: true
    })
  ]
})