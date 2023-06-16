// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js'
import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js'
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAHFCzhEr6SpEsvIfruiRe2G5csLhC42oo',
  authDomain: 'calculadora-nutricional-4d4de.firebaseapp.com',
  projectId: 'calculadora-nutricional-4d4de',
  storageBucket: 'calculadora-nutricional-4d4de.appspot.com',
  messagingSenderId: '284208897892',
  appId: '1:284208897892:web:d042888b3b63a242276471',
  measurementId: 'G-CJRPVJPMPE'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const analytics = getAnalytics(app)

getDocs(collection(db, 'ingredientes'))
 .then(querySnapshot => {
    querySnapshot.docs.forEach( doc => {
        console.log(doc.data())
    })
 })
 .catch(console.log)

 getDocs(collection(db, 'ingredientes'))
    .then(querySnapshot => {
        
        const ingredientesInicializar = querySnapshot.docs.reduce((acc, doc) => {
            const {nome} = doc.data()
            acc += `<option value="${nome}">${nome}</option>`

            return acc
        }, '')

        inputAlimento.innerHTML = ingredientesInicializar
    })
    .catch(console.log)

    


const teorGordura = document.querySelector('#gordura')
const teorCarboidrato = document.querySelector('#carboidrato')
const teorProteina = document.querySelector('#proteina')
const inputAlimento = document.querySelector('div.ingredientes > select')
const botaoInserir = document.querySelector('.nutrientes button')
const botaoAdicionar = document.querySelector('#botaoAdicionar')
const botaoCalcular = document.querySelector('#botaoCalcular')
const resultadoIngredientes = document.querySelector('.resultadoIngredientes')
const resultadoQuantidades = document.querySelector('.resultadoQuantidades')
let bancoDeDados = []
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

botaoInserir.addEventListener('click', ()=>{
    
    calc.addDemandas()

    
    console.log(`O valor é ${calc.teorCarboidrato} e é do tipo ${typeof(calc.teorCarboidrato)}`)
})

botaoAdicionar.addEventListener('click', ()=>{
    
    calc.addIngredientes()

    const divResultado = document.createElement('div')
    
    resultadoIngredientes.appendChild(divResultado)

    divResultado.innerText = calc.listaIngredientes[calc.listaIngredientes.length - 1]
    divResultado.style.textAlign = 'center'
     
})






