//Criando o contador de Items
var contadorItem = 0

function adicionar(){
    //Incrementando o contador de itens
    contadorItem ++
    //Crio o Item
    let novoItem = document.createElement("li");
    //Adiciono texto ao meu item
    novoItem.textContent = contadorItem + " - " + prompt("Digite o nome da tarefa");
    //Atribuo um ID
    novoItem.setAttribute("id", contadorItem);

    //Cria o botão de remover
    let botaoRemover = document.createElement("button")
    botaoRemover.textContent = "Remover" //Adiciona texto ao botão
    botaoRemover.setAttribute("onclick",`remover(${contadorItem})`) // Adiciona uma função ao botão

    novoItem.appendChild(botaoRemover) //Adiciona o Botão ao novo item 
    document.getElementById("lista").appendChild(novoItem);
}


function remover(itemLista){
    var item = document.getElementById(itemLista);
    document.getElementById("lista").removeChild(item);
    
}
