import test from './another'
import pic from './pic.jpg'
import './hmr/hmrcss.css'
// import './index.css'
import './index.scss'
import val from './hmr/val'
import constval from './hmr/constval'
import es6 from './test'
import Hmrcss from './hmr/hmrcss'
import "@babel/polyfill";

console.log('this is index.js')
console.log(pic)
const one = document.createElement('div')
const root = document.getElementById('root')
one.innerHTML='<h1>今天是个好日子，<h2>哈哈哈</h2></h1>'
root.appendChild(one)
Hmrcss()
val()
constval()
if(module.hot){
    module.hot.accept('./hmr/constval', ()=>{
        document.getElementById('root').removeChild(document.getElementById('only'))
        constval()
    })
}
es6()