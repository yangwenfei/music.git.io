/*
 * @Author: your name
 * @Date: 2020-05-29 11:14:33
 * @LastEditTime: 2020-05-29 15:35:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack\babel.config.js
 */ 
module.exports={
  presets:[
    ["@babel/env", {
      "modules":false,//"amd" | "umd" | "systemjs" | "commonjs" | false, 默认使用 "commonjs"。即，将代码中的ES6的import转为require。
      "useBuiltIns": 'usage', //可选值包括："usage" | "entry" | false, 默认为 false
      "corejs": {//指定core-js版本
        version: 3
      },
      "debug": true
    }]
  ]
}