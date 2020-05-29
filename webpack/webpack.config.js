/*
 * @Author: your name
 * @Date: 2020-05-27 15:19:56
 * @LastEditTime: 2020-05-29 16:08:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack\webpack.config.js
 */ 
const path=require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //将css单独抽离出来，不打包在js中
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports={
  entry:'./src/main.js',//./src/index.js
  output:{
    filename:'bundle.js',
    path:path.resolve(__dirname,'dist')
  },
  devtool:'inline-source-map',//将编译后的代码映射回原始源代码。如果一个错误来自于 b.js，source map 就会明确的告诉你。方便定位错误所在文件
  devServer: {
    contentBase: './dist',// 监听目录
    hot: true// 热重载
  },
  module: {
    rules:[
      {
        test:/\.css$/,
        use:["style-loader",MiniCssExtractPlugin.loader,"css-loader",'postcss-loader']
      },
      {
        test:/\.scss$/,
        use:["style-loader",MiniCssExtractPlugin.loader,"css-loader","sass-loader",'postcss-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico|webp)(\?.*)?$/,
        use:[
          {
            loader: 'url-loader',
            options: {
              limit: 1024 * 8, // 当图片大于8k时，交给file-loader处理，否则url-loader会把图片src转成base64编码
              name: '[name][hash:7].[ext]', //自定义设置输出文件的文件名规则、发布路径
              outputPath: 'images/',
              esModule: false//// 新版file-loader使用了ES Module模块化方式，将esModule配置为false就可以解决html页面中图片解析地址不正确问题
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use:[
          {
            loader: 'file-loader',
            options: {
              name: '[name][hash:7].[ext]', //自定义设置输出文件的文件名规则、发布路径
              outputPath: 'font/',
            }
          }
        ]
      },
      {
        test: /\.(html|htm)$/,
        use: [
          {
            loader: 'html-withimg-loader',
            options: {
                outputPath: 'images'
            }
          }
        ]
      },
      {
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        use:[
          {
            loader: 'babel-loader',
            options: {
              plugins: ['@babel/transform-runtime']// 'transform-runtime' 插件告诉 babel 要引用 runtime 来代替注入
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        //'cache-loader':缓存loader编译的结果,'thread-loader' :作用使用 worker 池来运行loader，每个 worker 都是一个 node.js 进程,'vue-loader': 解析.vue文件
        use: ['cache-loader','thread-loader','vue-loader']
      }
      
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template:'./public/index.html' //template 配置选项可以指定模板位置
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin()
  ],
}