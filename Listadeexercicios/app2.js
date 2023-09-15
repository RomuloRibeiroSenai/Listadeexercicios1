function exercicio1(){
    numero = parseInt(prompt("Digite um número"))
    
    if(numero == 0){
        alert("Zerooooo")
    } else if (numero % 2 == 0){
        alert("É par")
    } else {
        alert("É ímpar")
    }
}

function exercicio2(){
    numero = parseInt(prompt("Primeiro número"))
    numero1 = parseInt(prompt("Segundo número"))
    if (numero > numero1){
        alert(`${numero} é maior que ${numero1}`)
    } else if(numero == numero1){
        alert(`${numero} é igual a ${numero1}`)
    } else {
        alert(`${numero} é menor que ${numero1}`)
    }
}
 function exercicio3(){
     idade = prompt("Você tem mais que 65 anos? S para sim").toUpperCase()
     if (idade == "S"){
        alert("Você foi direcionado para a fila especial")
     } else {
        pcd = prompt("Você tem alguma deficiencia? S pra sim").toUpperCase()
        if (pcd == "S"){
            alert("Você foi direcionado para a fila especial")
        } else {
            gestante = prompt("Gestante ? S para sim").toUpperCase()
            if (gestante == "S"){
                alert("Você foi direcionado para a fila especial")
            }else {
                alert("Você está na fila normal ")
            }
        }
     }
 }

 function exercicio4(){
    idade = prompt("Idade")

    if (idade < 16){
        alert("Entrada não permitida")
    } else if (idade >=16 && idade <=18){
        alert("Entrada somente com responsável")
    } else if (idade > 18){
        alert("Liberado")
    }
 }

 function exercicio5(){
    login = "admin"
    senha = "admin1"

    loginTentado = prompt("Login: ")
    senhaTentada = prompt("Senha: ")

    if (loginTentado != login && senhaTentada != senha){
        alert("Login e Senha errados")
    } else if(loginTentado != login){
        alert("Login errado")
    } else if (senhaTentada != senha){
        alert("Senha errada")
    } else {
        alert("Acesso liberado")
    }
 }
function exercicio6(){
    resposta1 = 1;resposta2 = 2; resposta3 = 4;
    certo = 0
    erro = 0
    alert("Jogo das perguntas")
    tentativa = prompt("Quantas integrantes entraram em Moria\n1. 9 Integrantes\n2. 12 Integrantes\n3. 6 Integrantes\n4. 8 Integrantes")
    if (tentativa == resposta1){
        certo++
    } else {
        erro++
    }
    tentativa = prompt("C é uma linguagem de\n1.FrontEnd\n2.BackEnd\n3.FullEnd\n4.GreatEnd")
    if (tentativa == resposta2){
        certo++
    } else {
        erro++
    }
    tentativa = prompt("Placa de vídeo é..\n1.Software\n2.Um sonho\n3.Uma broca\n4.Hardware")
    if(tentativa == resposta3){
        certo++
    } else {
        erro++
    }
    if (certo == 3){
        alert("Parabéns você conseguiu")
    } else if (erro == 3){
        alert("Eliminado")
    } else {
        tentativa = prompt("Aula de FrontEnd é\n1.Ótima\n2.Estimulante\n3.Achocolatada\n4.Todas as anteriores")
        certo++
        if (certo == 3){
            alert("Parabéns você conseguiu")
        } else {
            tentativa = prompt("Ultima chance\nFlamengo é campeão mundial?\n1.Sim\n2.Claro\n3.Menos vezes que deveria\n4.Sempre")
            certo++
            if(certo ==3){
                alert("Parabéns você conseguiu")
            } else {
                alert("Eliminado")
            }
        }
    }
}
