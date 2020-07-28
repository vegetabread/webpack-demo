function constval () {
    var constone = document.getElementById('root')
    var consttwo = document.createElement('div')
    consttwo.setAttribute('id','only')
    // consttwo.className='only'
    consttwo.innerHTML=3000
    constone.appendChild(consttwo)
}
export default constval