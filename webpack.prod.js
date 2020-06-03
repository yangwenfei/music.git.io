/*
 * @Author: your name
 * @Date: 2020-06-01 11:04:40
 * @LastEditTime: 2020-06-03 11:11:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack.git.io\webpack2\webpack.prod.js
 */ 

let merge = require('webpack-merge')     
let base = require('./webpack.common')
let TerserPlugin = require('terser-webpack-plugin');        
let OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = merge(base, {
  mode: 'production',
  output:{
    publicPath: './'     //静态资源cdn的地址
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({   // 生产环境压缩JS
        cache: false,    //是否否启用缓存
        parallel: true,   //多通道并行处理
        sourceMap: false, //生产环境关闭源码映射
        terserOptions: {
          warnings: false,    //清除警告
          compress:{
            drop_debugger: true,	// 清除degugger
            drop_console: true   //清除所有的console信息
          }
        }
      }),
      new OptimizeCssAssetsPlugin()   // 生产环境压缩css
    ],
  },
})