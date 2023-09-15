function exercicio1(){
     numero1 = prompt("Coloque o primeiro numero")
     numero2 = prompt("Coloque o segundo número")
     alert(parseInt(numero1) + parseInt(numero2))
}
function exercicio2(){
    nome = prompt("Seu nome por favor:")
    sobrenome = prompt("Sobrenome:")
    alert(`Olá, ${nome} ${sobrenome}`)
}
function exercicio3(){
    reais = prompt("Coloque o valor em reais")
    alert(`Com R$ ${reais} vc tem USD ${reais / 4.95}`)
}
function exercicio4(){
    numero = prompt("Coloque o número desejado")
    antes = parseInt(numero) - 1
    depois = parseInt(numero) + 1
    alert(`O número antes de ${numero} é ${antes} e o depois é ${depois}`)
}
function exercicio5(){
    area = prompt("Área do terreno em m2")
    m2 = prompt("Valor do m2 na região")
    alert(`O valor do terreno é ${ area * m2}`)
}
function exercicio6(){
    distancia = prompt("Qual a distância percorrida")
    gasosa = prompt("Quanto de gasolina foi gasto em litros?")
    alert(`Seu consumo foi de ${ distancia / gasosa} km/l`)
}
function extra(){
    operacao = prompt("Qual operação ? Somente +,-,*,/")
    numero = prompt("Primeiro número")
    numero1 = prompt("Segundo número")
    if (operacao == "+" ){
        alert(parseInt(numero) + parseInt(numero1))
    } else if (operacao == "-"){
        alert(`${numero - numero1}`)
    } else if (operacao == "*"){
        alert(`${numero * numero1}`)
    } else {
        alert(`${numero / numero1}`)
    }
}

