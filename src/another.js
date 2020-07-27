function test() {
    var one = document.getElementById('root')
    var two = document.createElement('div')
    two.innerHTML='<div>this is another html<h2>i dont care</h2></div>'
    one.appendChild(two)
}
export default test