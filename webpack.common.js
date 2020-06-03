/*
 * @Author: your name
 * @Date: 2020-06-01 11:04:25
 * @LastEditTime: 2020-06-03 16:42:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack.git.io\webpack2\webpack.common.js
 */ 
const path=require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')//将css单独抽离出来，不打包在js中
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports={
  entry:'./src/main.js',//./src/index.js
  output:{
    filename: 'js/[name].[hash:7].js',
    path:path.resolve(__dirname,'dist'),
  },
  stats: {     // 本地起服务或者打包时候，清除过多的日志信息，精简控制台信息。
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  },
  module: {
    rules:[
      {
        test:/\.css$/,
        use:[
          "style-loader",
          {
            loader:MiniCssExtractPlugin.loader,
            options:{  //如果不设置这个css的publicPath，背景图和字体文件路径都会有问题
              publicPath:'../'
            }
          },
         "css-loader",'postcss-loader'
        ]
      },
      {
        test:/\.scss$/,
        use:[ "style-loader",
        {
          loader:MiniCssExtractPlugin.loader,
          options:{
            publicPath:'../'
          }
        },
       "css-loader",'postcss-loader']
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
              outputPath: 'fonts/',
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
                outputPath: 'images/'
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
        exclude: /(node_modules)/,
        //'cache-loader':缓存loader编译的结果,'thread-loader' :作用使用 worker 池来运行loader，每个 worker 都是一个 node.js 进程,'vue-loader': 解析.vue文件
        use: ['cache-loader','thread-loader','vue-loader']
      }
      
    ]
  },
  resolve: {
    extensions: ['.vue', '.js','.css', '.scss',  '.json'],// 能够使用户在引入模块时不带扩展名字, 自动解析
    alias: {    //别名，方便快速查找模块
      '@': path.resolve(__dirname, './src')
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name][hash:7].css',
      // chunkFilename: '[id].css',
    }),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template:'./public/index.html' //template 配置选项可以指定模板位置
    }),
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
  ],
}