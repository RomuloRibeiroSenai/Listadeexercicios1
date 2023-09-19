function exercicio1(){
    let escolha = 0;
    let lista_de_items = ['Pão','Arroz','Frango']
    let lista_inteira = ""
    alert("Bem vindo ao mercado")
        
    while (escolha != 3){
        escolha = parseInt(prompt("1. Para inserir um item\n2. Ver Lista\n3. Sair"))
        switch (escolha){
            case 1: 
                item = prompt("Qual o item ?")
                lista_de_items.push(item)
                alert("Incluido")
                break;
            case 2:
                //lista_de_items.forEach(item => lista_inteira += item + "\n")
                for(i = 0; i < lista_de_items.length ; i++){
                    lista_inteira += lista_de_items[i] + "\n"
                }
                alert(lista_inteira)
                lista_inteira = "";
                break;
            case 3:
                alert("Volte Sempre")
                break;
            default:
                alert("Opção Inválida")
                break;
        }}
}

function exercicio2(){
    let escolha = 0;
    let lista_de_items = ['Pão','Arroz','Frango']
    let lista_inteira = ""
    alert("Bem vindo ao mercado")
        
    while (escolha != 4){
        escolha = parseInt(prompt("1. Para inserir um item\n2. Ver Lista\n3. Remover um item\n4. Sair"))
        switch (escolha){
            case 1: 
                item = prompt("Qual o item ?")
                lista_de_items.push(item)
                alert("Incluido")
                break;
            case 2:
                //lista_de_items.forEach(item => lista_inteira += item + "\n")
                for(i = 0; i < lista_de_items.length ; i++){
                    lista_inteira += lista_de_items[i] + "\n"
                }
                alert(lista_inteira)
                lista_inteira = "";
                break;
            case 3:
                let remove = prompt("Item a remover")
                for(i = 0; i < lista_de_items.length; i++){
                    if (lista_de_items[i] == remove){
                       // lista_de_items = lista_de_items.filter(remove) TA ERRADO !!!!!
                    }
                }
                alert("Removido")
                break;
            case 4:    
                alert("Volte Sempre")
                break;
            default:
                alert("Opção Inválida")
                break;
        }}
}

exercicio2()