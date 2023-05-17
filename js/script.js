const botoes = document.querySelectorAll('.cabecalho button')


function activateMenu (){
            
    if (document.getElementById("imenu").classList.contains('show')) {
        document.getElementById("imenu").classList = "hide";


        
    } else{
        document.getElementById("imenu").classList = "show";
    }
}

botoes.forEach(bot => {
    bot.addEventListener('click', (e) =>{
        if (e.target.localName === 'span'){
            
            console.log('span')
        } else{
            const texto = e.target.innerText
            
            console.log(texto)
        }
         
         
    })
    
});

function activateDropMenu (e){
    const texto = e.target.innerText

    if (texto = 'Produtos') {
        if (document.querySelector("ul#iproducts").classList.contains("hidedropmenu")){
            document.querySelector("ul#iproducts").classList = "showdropmenu"
        } else {
            document.querySelector("ul#iproducts").classList = "hidedropmenu"
    
        }
    } else if(texto = 'Institucional'){
        if (document.querySelector("ul#iinstitutional").classList.contains("hidedropmenu")){
            document.querySelector("ul#iinstitutional").classList = "showdropmenu"
        } else {
            document.querySelector("ul#iinstitutional").classList = "hidedropmenu"
    
        }
    } else if(texto = 'Conteúdo'){
        if (document.querySelector("ul#icontent").classList.contains("hidedropmenu")){
            document.querySelector("ul#icontent").classList = "showdropmenu"
        } else {
            document.querySelector("ul#icontent").classList = "hidedropmenu"
    
        }
    } else if(texto = 'Minha Conta'){
        if (document.querySelector("ul#imyuser").classList.contains("hidedropmenu")){
            document.querySelector("ul#imyuser").classList = "showdropmenu"
        } else {
            document.querySelector("ul#imyuser").classList = "hidedropmenu"
    
        }
    } else {
        if (document.querySelector("ul#isupport").classList.contains("hidedropmenu")){
            document.querySelector("ul#isupport").classList = "showdropmenu"
        } else {
            document.querySelector("ul#isupport").classList = "hidedropmenu"
    
        }
    }
    
    
    
    
}