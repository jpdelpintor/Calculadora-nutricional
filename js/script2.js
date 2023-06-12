const teorGordura = document.querySelector('#gordura')
const teorCarboidrato = document.querySelector('#carboidrato')
const teorProteina = document.querySelector('#proteina')
const inputAlimento = document.querySelector('div.ingredientes > input')
const botaoInserir = document.querySelector('.nutrientes button')
const botaoAdicionar = document.querySelector('.ingredientes button')
let ingredientes = []

class calculadora{
    constructor(gordura, carboidrato, proteina, ingredientes){
        this.teorGordura = gordura
        this.teorCarboidrato = carboidrato
        this.teorProteina = proteina
        this.listaIngredientes = ingredientes
    }


}

botaoInserir.addEventListener("click", ()=>{
    const gordura = +teorGordura.value
    const carboidrato = +teorCarboidrato.value
    const proteina = +teorProteina.value
    const calc = new calculadora(gordura, carboidrato, proteina)
    console.log(`O valor é ${calc.teorCarboidrato} e é do tipo ${typeof(calc.teorCarboidrato)}`)
})

botaoAdicionar.addEventListener("click", ()=>{
    
    ingredientes = inputAlimento.value
    console.log(ingredientes)
})






