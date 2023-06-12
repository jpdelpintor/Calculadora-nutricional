const teorGordura = document.querySelector('#gordura')
const teorCarboidrato = document.querySelector('#carboidrato')
const teorProteina = document.querySelector('#proteina')
const inputAlimento = document.querySelector('div.ingredientes > input')
const botaoInserir = document.querySelector('.nutrientes button')
const botaoAdicionar = document.querySelector('.ingredientes button')
const areaResultado = document.querySelector('.resultado')
let ingredientes = []

class calculadora{
    constructor(gordura, carboidrato, proteina, ingredientes){
        this.teorGordura = gordura
        this.teorCarboidrato = carboidrato
        this.teorProteina = proteina
        this.listaIngredientes = ingredientes
    }

    addDemandas(){
        const gordura = +teorGordura.value
        const carboidrato = +teorCarboidrato.value
        const proteina = +teorProteina.value

        this.teorCarboidrato = carboidrato
        this.teorGordura = gordura
        this.teorProteina = proteina

    }

    
    addIngredientes(){
            if(ingredientes.length === 0){
                ingredientes[0] = inputAlimento.value
            } else{
                ingredientes[ingredientes.length] = inputAlimento.value
            }

            this.listaIngredientes = ingredientes
    }


}

const calc = new calculadora

botaoInserir.addEventListener("click", ()=>{
    
    calc.addDemandas()

    
    console.log(`O valor é ${calc.teorCarboidrato} e é do tipo ${typeof(calc.teorCarboidrato)}`)
})

botaoAdicionar.addEventListener("click", ()=>{
    
    calc.addIngredientes()

    const divResultadoMaior = document.createElement('div')
    divResultadoMaior.classList.add('quadroResultados')
    



    
    console.log(`${calc.listaIngredientes}`)
    
    
})






