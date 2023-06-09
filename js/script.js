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
        
        const selectedClass = e.target.classList

        if (selectedClass.contains('spanProdutos')) {
            if (document.querySelector("ul#iproducts").classList.contains("hidedropmenu")){
                document.querySelector("ul#iproducts").classList = "showdropmenu"
            } else {
                document.querySelector("ul#iproducts").classList = "hidedropmenu"
        
            }
        } else if(selectedClass.contains('spanInstitucional')){
            if (document.querySelector("ul#iinstitutional").classList.contains("hidedropmenu")){
                document.querySelector("ul#iinstitutional").classList = "showdropmenu"
            } else {
                document.querySelector("ul#iinstitutional").classList = "hidedropmenu"
        
            }
        } else if(selectedClass.contains('spanConteudo')){
            if (document.querySelector("ul#icontent").classList.contains("hidedropmenu")){
                document.querySelector("ul#icontent").classList = "showdropmenu"
            } else {
                document.querySelector("ul#icontent").classList = "hidedropmenu"
        
            }
        } else if(selectedClass.contains('spanMinhaConta')){
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
         
         
    })
    
});

