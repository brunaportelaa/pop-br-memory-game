let imagePaths = [
   '../images/cartas/doce22.png', '../images/cartas/escandalointimo.png'
, '../images/cartas/funkgeneration.png' , '../images/cartas/futurofluxo.png' , '../images/cartas/iza.png', '../images/cartas/vila.png'
]

let imagePickList = [...imagePaths, ...imagePaths]
const cardCount = imagePickList.length

//Game state
let revealedCount = 0
let activeCard = null
let awaitingEndOfMove = false
let container = document.querySelector('.cards')

//Add divas to cards
function buildTile(img) {
    const element = document.createElement('div')
    element.classList.add('card')
    element.style.backgroundImage = `url(${img})`
    element.innerHTML = '<img src="../images/glitter.gif" style="width:100%">'
    return element
}

for (let i=0; i<cardCount; i++) {
    const randomIndex = Math.floor(Math.random()*imagePickList.length)
    const diva = imagePickList[randomIndex]
    const tile = buildTile(diva)

    imagePickList.splice(randomIndex, 1)
    container.appendChild(tile)
}


