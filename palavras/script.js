const palavra = "farol";
var linha = 1;

function verificar(){
    let tentativa;
    let string; 

    switch(linha){
        case 1:
            tentativa = document.getElementById("1").childNodes;

            for(var i = 0; i < tentativa.length; i++){
                console.log(tentativa[i].childNodes);       
            }
            
            
            
        break;
        case 2:
            tentativa = document.getElementById("2")
        break;
        case 3:
            tentativa = document.getElementById("3")
        break;
        case 4:
            tentativa = document.getElementById("4")
        break;
        case 5:
            tentativa = document.getElementById("5")
        break;
        case 6:
            tentativa = document.getElementById("6")
        break;
    }
    
} 