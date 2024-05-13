let imagePaths = [
   '../images/cartas/doce22.png', '../images/cartas/escandalointimo.png' , '../images/cartas/funkgeneration.png' , '../images/cartas/futurofluxo.png' , '../images/cartas/iza.png', '../images/cartas/vila.png', '../images/cartas/anaconda.png', '../images/cartas/bandida.png', '../images/cartas/cafedamanha.png', '../images/cartas/girlfromrio.png'
]

let imagePickList = [...imagePaths, ...imagePaths]
const cardCount = imagePickList.length



//Game state
let revealedCount = 0
let activeCard = null
let awaitingEndOfMove = false
let container = document.querySelector('.cards')
let tentativas = 0
let highScore = 0
let showTentativas = document.querySelector('#showTentativas')

//Adjust grid size
container.classList.add('medio')

//Add divas to cards
function buildTile(img) {
    const element = document.createElement('div')
    element.classList.add('card')
    element.style.backgroundImage = `url(${img})`
    element.innerHTML = '<img src="../images/glitter.gif" style="width:100%">'
    element.setAttribute('data-revealed', 'false')

    element.addEventListener('click', () => {

        const revealed = element.getAttribute('data-revealed')

        if (awaitingEndOfMove || revealed === 'true') {
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
            activeCard.setAttribute('data-revealed', 'true')
            element.setAttribute('data-revealed', 'true')
            awaitingEndOfMove = false
            activeCard = null
            revealedCount += 2
            console.log('you have a match!!!!')

            if (revealedCount === cardCount) {
                alert('Vc ganhou!!! clique no botão para jogar de novo')
                if (highScore === 0 || tentativas<highScore) {
                    highScore = tentativas
                    let showHighScore = document.querySelector('#showHighScore')
                    showHighScore.textContent = `High Score: ${highScore}`
                }
            }

            return
        }
        

        tentativas += 1
        showTentativas.textContent = `Tentativas: ${tentativas}`

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

function randomizeCards() {
    for (let i=0; i<cardCount; i++) {
        const randomIndex = Math.floor(Math.random()*imagePickList.length)
        const diva = imagePickList[randomIndex]
        const tile = buildTile(diva)

        imagePickList.splice(randomIndex, 1)
        container.appendChild(tile)
    }
}

//Refresh Game

let refreshButton = document.getElementById('startOver')
refreshButton.addEventListener('click', () => {
    revealedCount = 0
    activeCard = null
    tentativas = 0
    showTentativas.textContent = `Tentativas: ${tentativas}`
    container.innerHTML = ''
    imagePickList = [...imagePaths, ...imagePaths]
    randomizeCards()
})

randomizeCards()
