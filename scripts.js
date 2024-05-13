// let affair = './images/cartas/affair.png'
// let anaconda = './images/cartas/anaconda.png'
// let anittadasantigas = './images/cartas/anittadasantigas.png'
// let bandida = './images/cartas/bandida.png'
// let bang = './images/cartas/bang.png'
// let batidao = './images/cartas/batidao.png'
// let cachorrinhas = './images/cartas/cachorrinhas.png'
// let cafedamanha = './images/cartas/cafedamanha.png'
// let doce22 = './images/cartas/doce22.png'
// let escandalointimo = './images/cartas/escandalointimo.png'
// let funkgeneration = './images/cartas/funkgeneration.png'
// let futurofluxo = './images/cartas/futurofluxo.png'
// let garupa = './images/cartas/garupa.png'
// let girlfromrio = './images/cartas/girlfromrio.png'
// let hellomundo = './images/cartas/hellomundo.png'
// let iza = './images/cartas/iza.png'
// let ko = './images/cartas/ko.png'
// let ladyleste = './images/cartas/ladyleste.png'
// let modoturbo = './images/cartas/modoturbo.png'
// let noitada = './images/cartas/noitada.png'
// let numanice = './images/cartas/numanice.png'
// let souma = './images/cartas/souma.png'
// let tropadalud = './images/cartas/tropadalud.png'
// let vila = './images/cartas/vila.png'

let imagePaths = [
   './images/cartas/doce22.png', './images/cartas/escandalointimo.png'
, './images/cartas/funkgeneration.png' , './images/cartas/futurofluxo.png' , './images/cartas/iza.png', './images/cartas/vila.png', './images/cartas/doce22.png', './images/cartas/escandalointimo.png'
, './images/cartas/funkgeneration.png' , './images/cartas/futurofluxo.png' , './images/cartas/iza.png', './images/cartas/vila.png'
]

function shuffleArray(array) {
    for (let currentIndex = array.length - 1; currentIndex > 0; currentIndex--) {
        const randomIndex = Math.floor(Math.random() * (currentIndex + 1));
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}