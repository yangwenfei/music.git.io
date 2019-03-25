const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  entry: {
    'app': './src/index.js',
    'another': './src/another-module.js'
  }, //打包的入口文件
  output: { //打包输出的文件
    filename: '[name].[chunkhash].js', //输出文件的名称设置
    //path.resolve方法将路径序列解析成一个完整的绝对路径
    path: path.resolve(__dirname, 'dist') //打包文件的输出路径
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({ //生成一个html文件，并将打包内容自动引入
      title: 'Output Management'
    }),
    //webpack.optimize.CommonsChunkPlugin这种写法在4.0已经废弃，
    new webpack.optimize.SplitChunksPlugin({
      chunks: "initial",
      minSize: 3, // 模块的最小体积
      minChunks: 1, // 模块的最小被引用次数
      maxAsyncRequests: 5, // 按需加载的最大并行请求数
      maxInitialRequests: 3, // 一个入口最大并行请求数
      automaticNameDelimiter: '-', // 文件名的连接符
      name: true,
      cacheGroups: { // 缓存组
        vendors: { //将node_modules中引用的模块打包到一个js中
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: 0
        },
        default: { // 模块之间引用的公共模块被打包到一个公共的js中
          name: 'common',
          minChunks: 2,
          priority: 0,
          reuseExistingChunk: true
        }
      }

    }),
    new ExtractTextPlugin("styles.css")
  ],
  module: {
    //rules数组用来配置相关的loader
    rules: [{
        test: /\.css$/,
        // use: ['style-loader', 'css-loader'],
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'img/[path][name][hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  }
}