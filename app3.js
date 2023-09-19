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
            setTimeout( () => {show(i);}, 1000)
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
            //show(i)
        }
    }
    // function show(i){
    //     console.log(i)
    //     setTimeout(function() {show(i);}, 1000)
    // }
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

function exercicio5(){
    login = "admin"
    senha = "admin1"
    contador_erros = 0
    tentativas = 3
    logado = false;

    while(!logado){
    loginTentado = prompt("Login: ")
    senhaTentada = prompt("Senha: ")

    if (loginTentado != login && senhaTentada != senha){
        alert(`Login e Senha errados você tem ${tentativas} tentativas restantes`)
        tentativas--
        contador_erros++
    } else if(loginTentado != login){
        contador++
        alert(`Login errado você tem ${tentativas} tentativas restantes`)
        tentativas--
    } else if (senhaTentada != senha){
        contador_erros++
        alert(`Senha errada você tem ${tentativas} tentativas restantes`)
        tentativas--
    } else if(loginTentado == login && senhaTentada == senha) {
        logado = true
        alert(`Acesso liberado ${login}`)
        break
    }
    if (contador_erros == 3){
        contador_erros++
        alert("Ultima chance")
    } else if(contador_erros > 3){
        alert("Bloqueado")
        break
    }
}
}

/*escreva um programa que faça o seguinte Exercício: Verificador de números primos em uma faixa
Descrição:

Escreva um programa que faça o seguinte:

Pergunte ao usuário dois números: inicio e fim.
Verifique e exiba todos os números primos entre inicio e fim (inclusive).
Regras adicionais:

Se inicio for maior que fim, exiba uma mensagem informando que o intervalo é inválido.
Se inicio ou fim for menor que 2, ajuste para 2, pois 2 é o menor número primo.
Dicas:

Um número primo é um número maior que 1 e não pode ser formado pela multiplicação de outros dois números naturais menores.
*/

function exercicioPrimo(){
    inicio = parseInt(prompt("Coloque o primeiro número"))
    if (inicio < 2){
        inicio = 2
    }
    fim = parseInt(prompt("Coloque o segundo número"))
    while(fim <= inicio){
        fim = parseInt(prompt("Coloque o segundo número"))
    }
    
    for (let i = inicio; i <= fim; i++){
        a = primo(i)
        if (a){
            console.log(`${i} é primo maluco`)
        }
    }

    function primo(numero){

        raiz = Math.sqrt(numero);
        for (let j = 2; j <= raiz; j++){
            if (numero % j === 0){
                return false;
            }
        }
        return true;
    }
}
exercicioPrimo()

