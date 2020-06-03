/*
 * @Author: your name
 * @Date: 2020-05-27 17:39:54
 * @LastEditTime: 2020-05-27 18:05:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack\post.config.js
 */ 
//由于postcss-loader是借助autoprefixer插件给我们的css属性添加厂商前缀的，因此，postcss-loader是有一个单独的配置文件的，配置文件的名字是 postcss.config.js,和webpack.config.js同级；
module.exports={
  plugins:[
    require('autoprefixer')()
  ]
}