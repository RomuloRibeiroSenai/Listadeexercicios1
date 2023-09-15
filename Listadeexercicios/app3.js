function exercicio1(){
    do  {
    numero = prompt("Coloque seu número de segundos")
    }
    while(numero > 60 || numero < 1)
    i = 0
    // for (i = 0; i <= numero; i++ ){        
    //     console.log(i)
    // }

    function show (i){
        console.log(i)
        i++
        if( i <= numero){
            setTimeout(function() {show(i);}, 1000)
        }
    }
    show(i)
}

function exercicio2(){
    numero = prompt("Coloque um numero")
    for(i = 1; i <= 9; i++){
        console.log(`${numero} x ${i} = ${numero * i}`)
    }
}
function exercicio3(){
    let valido1 = false
    let valido2 = false
    
    while(!valido1){
        numero = parseInt(prompt("Primeiro número"))
        if(!(isNaN(numero))){
            valido1 = true
        }
    }

    while(!valido2){
        numero2 = parseInt(prompt("Segundo número"))
        if(!(isNaN(numero2)) && numero2 > numero){
            valido2 = true
        } else {
            alert("Coloque um número maior que o primeiro número")
        }
    }

    for( i = numero + 1; i < numero2; i++){
        if (i % 2 == 0){
            console.log(i)
        }
    }
}

function exercicio4(){
    idade = parseInt(prompt("Sua idade por favor"))
    if (idade < 16 ){
        console.log("Entrada proibida")
    } else if (idade >= 16 && idade <18){
        console.log("Somente com responsavel")
    } else if (idade >=18){
        console.log("Entrada Permitida")
    }
}
exercicio4()
