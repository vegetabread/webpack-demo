import test from './another'
import pic from './pic.jpg'
// import './index.css'
import './index.scss'
console.log('this is index.js')
console.log(pic)
test()
const one = document.createElement('div')
const root = document.getElementById('root')
one.innerHTML='<h1>今天是个好日子，<h2>哈哈哈</h2></h1>'
root.appendChild(one)