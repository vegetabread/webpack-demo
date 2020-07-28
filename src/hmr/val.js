function val () {
    var one = document.getElementById('root')
    var two = document.createElement('div')
    one.appendChild(two)
    two.innerHTML=1
    two.onclick=function() {
        two.innerHTML=parseInt(two.innerHTML,10)+1
    }
}
export default val