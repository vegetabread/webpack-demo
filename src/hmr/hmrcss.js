function Hmrcss () {
    const one = document.getElementById('root')
    const two = document.createElement('button')
    two.innerHTML="点击添加样式"
    one.appendChild(two)
    two.onclick=function() {
        const three = document.createElement('div')
        three.className='test'
        three.innerHTML='testcss'
        one.appendChild(three)
    }
}
export default Hmrcss