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

    element.addEventListener('click', () => {
        if (awaitingEndOfMove) {
            return
        }
        
        element.innerHTML = ''

        if (!activeCard) {
            activeCard = element
            return
        } 


        const divaToMatch = activeCard.style.backgroundImage
        console.log(divaToMatch)
        console.log(`url(${img})`)

        if (divaToMatch === `url("${img}")`) {
            awaitingEndOfMove = false
            activeCard = null
            revealedCount += 2
            console.log('you have a match!!!!')

            if (revealedCount === cardCount) {
                alert('You win! Refresh to play again')
            }

            return
        }
        

        awaitingEndOfMove = true

        setTimeout(() => {
            element.innerHTML = '<img src="../images/glitter.gif" style="width:100%">'
            activeCard.innerHTML = '<img src="../images/glitter.gif" style="width:100%">'
            awaitingEndOfMove = false
            activeCard = null
        }, 1000)

    }) 

    return element
}

for (let i=0; i<cardCount; i++) {
    const randomIndex = Math.floor(Math.random()*imagePickList.length)
    const diva = imagePickList[randomIndex]
    const tile = buildTile(diva)

    imagePickList.splice(randomIndex, 1)
    container.appendChild(tile)
}


