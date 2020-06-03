/*
 * @Author: your name
 * @Date: 2020-05-27 15:19:01
 * @LastEditTime: 2020-05-29 15:01:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack\src\index.js
 */ 
import './asess/css/style.css';
import './asess/css/sass.scss'
import icon from './asess/images/company.png'
import print from './views/es6.js'
function component() {
  var element = document.createElement('div')
  var btn = document.createElement('button')
  element.classList.add('hello')
  element.classList.add('sass')
  element.innerHTML = 'hello webpack';
  
  var imgIcon = document.createElement('img')
  imgIcon.src = icon
  element.appendChild(imgIcon)
  print()
  console.log(4444444444)
  return element
}
document.body.appendChild(component())