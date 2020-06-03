/*
 * @Author: your name
 * @Date: 2020-06-01 11:04:59
 * @LastEditTime: 2020-06-02 16:54:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack.git.io\webpack2\webpack.dev.js
 */ 

let webpack = require('webpack') 
let merge = require('webpack-merge')     
let base = require('./webpack.common')

module.exports = merge(base, {
  mode: 'development',     // 定义环境变量
  output:{
    publicPath: '/'     //静态资源cdn的地址
  },
  devtool:'inline-source-map',//将编译后的代码映射回原始源代码。如果一个错误来自于 b.js，source map 就会明确的告诉你。方便定位错误所在文件
  devServer: {
    port: 8080,     //设置端口
    hot: true,     // 启用热更新
    open: true,    // 自动打开浏览器
    contentBase: './dist',// 监听目录
    // proxy: {
    //   '/api/*': {
    //     target: 'http://192.168.200.71:8765',
    //     changeOrigin: true
    //   }
    // }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),   //热更新插件
    // new webpack.NamedModulesPlugin(),
    // new webpack.NamedChunksPlugin()    // 使用此插件热更新时控制台会显示模块的相对路径
  ]
})
