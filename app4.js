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
                       lista_de_items.splice(i,1);
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

function exercicio3(){
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
                lista_de_items.sort()
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
                       lista_de_items.splice(i,1);
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

function exercicio4(){
    let escolha = 0
    let lista_inteira = ""
    let lista_de_items = [
        ["Arroz", 10],
        ["Pão", 2],
        ["Frango", 15]
    ]
    alert("Bem vindo ao mercado")
        
    while (escolha != 4){
        escolha = parseInt(prompt("1. Para inserir um item\n2. Ver Lista\n3. Remover um item\n4. Sair"))
        switch (escolha){
            case 1: 
                item = prompt("Qual o item ?")
                preco = prompt("Preço")
                lista_de_items.push([item,preco])
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
                    if (lista_de_items[i][0] == remove){
                       lista_de_items.splice(i,1);
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

function exercicio5(){
    let escolha = 0
    let lista_inteira = ""
    
    let lista_de_items = [
        ["Arroz", 10],
        ["Pão", 2],
        ["Frango", 15],
        ["Presunto", 8]
    ]
    alert("Bem vindo ao mercado")
    while (escolha != 4){
        escolha = parseInt(prompt("1. Para inserir um item\n2. Ver Lista\n3. Remover um item\n4. Sair"))
        switch (escolha){
            case 1: 
            item = prompt("Qual o item ?")
            preco = prompt("Preço")
            lista_de_items.push([item,preco])
            alert("Incluido")
            break;
            case 2:
                lista_inteira = ordenar_lista(lista_de_items);
                alert(lista_inteira);
                lista_inteira = "";
                break;
                case 3:
                    let remove = prompt("Item a remover")
                    for(i = 0; i < lista_de_items.length; i++){
                        if (lista_de_items[i][0] == remove){
                       lista_de_items.splice(i,1);
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
                
                // so ta ordenando o primeiro elemento , ta quebrada
                function ordenar_lista(lista_de_items){
                    let lista_temp = lista_de_items.slice()
                    let numero_base = 1000
                    let indice_menor;
                    while(lista_temp.length > 0){
                    for(let j = 0; j < lista_temp.length; j++){
                        // procura o menor numero tira da lista, coloca em outra 
                        if(lista_temp[j][1] < numero_base){
                            numero_base = lista_temp[j][1];
                            indice_menor = j;
                        }
                    }
                    lista_inteira += lista_temp[indice_menor] + "\n"
                    lista_temp.splice(indice_menor,1)
                    indice_menor = 0
                    numero_base = 1000
                }
            
                    return lista_inteira
                }
}
exercicio5()