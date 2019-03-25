import './style.css'
import icon from '../assets/icon.ico'
import printMe from './print'

function component() {
  var element = document.createElement('div')
  var btn = document.createElement('button')

  element.innerHTML = 'hello webpack';
  element.classList.add('hello')

  var imgIcon = document.createElement('img')
  imgIcon.src = icon

  btn.innerHTML = 'Click me and check the console!'
  btn.onclick = printMe

  element.appendChild(imgIcon)
  element.appendChild(btn)
  return element
}
document.body.appendChild(component())