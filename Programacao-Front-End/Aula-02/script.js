
//Funções em Javascript:

function somarNumeros(num1,num2) {
    return num1 + num2;
}

let resultado = somarNumeros(5,10)
console.log(resultado)


// Trabalhando com DATA e HORA

let dataAtual = new Date()
console.log(dataAtual.toISOString())

let ano = dataAtual.getFullYear();
let mes = dataAtual.getMonth() + 1;
let dia = dataAtual.getDate();
let hora = dataAtual.getHours();
let minuto = dataAtual.getMinutes();
let segundo = dataAtual.getSeconds();

console.log(`${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`);

// =================================================================
// Outro exemplo de Date
let hoje = new Date();
let diasParaAdicionar = 7;

// Cria uma nova data a partir da data atual
let novaData = new Date(hoje);
novaData.setDate(novaData.getDate() + diasParaAdicionar);

// toLocaleDateString  Exibe a data no formato local, ou seja, Dia/Mes/Ano
console.log(novaData.toLocaleDateString());



// Manipulando o DOM

//Usando o InnerHTML
document.getElementById("conteudo").innerHTML = "<p>Ola Mundo!</p>";

var valor = document.getElementById("conteudo").innerHTML;
console.log(valor);


//Usando o setAtributte e o getAtributte
document.getElementById("foto").setAttribute("src", "imagem.jpg");

console.log(document.getElementById("foto").getAttribute("src"));

//Alterando propriedades CSS
document.getElementById("conteudo").style.backgroundColor ="lightblue";
document.getElementById("foto").style.width = "500px";


//Criando uma função para um botão
function mudaTamanho(){
    document.getElementById("foto").style.width = "1000px";
}

