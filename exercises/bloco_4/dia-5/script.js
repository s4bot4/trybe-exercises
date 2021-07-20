document.getElementById('page-title').innerText = 'aprendizado da aula de hoje';
document.getElementById('second-paragraph').innerText = 'destruindo o site';
document.getElementById('subtitle').innerText = 'SITE HACKEADO by S4BOT4';
// 
document.getelementsbyclassname('nome de classe');
//exemplo de uso acessando um elemento de uma lista
document.getElementById('page-title').innerText = 'aprendizado da aula de hoje';

document.getElementsByClassName("pilotos-f1-atual")[0].innerText = "Stroll";
//acessando varios elementos e substituindo-os
let pilotosDeF1 = document.getElementsByClassName("pilotos-f1-atual");

for (let i = 0; i < pilotosDeF1.length; i += 1) {
  pilotosDeF1[i]. innerText = "Lewis Hamilton";
}

// document.getElementsByTagName = retorna lista de elementos
document.getElementsByTagName("p");
// alterando elemento de uma tag
document.getElementsByTagName("p")[0].innerText = "texto pra alterar" 
// document.querySelector = retorna um elemento ou o primeiro elemento selecionado
document.querySelector("#Dona)");

document.querySelector(".pilotos-sem-titulo p");

document.querySelector(".pilotos-f1-atual");

document.querySelector(".pilotos-sem-titulo .pilotos-f1-atual ");

// diferencas document.querySelector e document.querySelectorAll
// retorna um nodelist (uma lista) com varios elementos selecionados
// especifando um elemento da lista
document.querySelectorAll("p") [0].innerText = "Lenda";
// especificando todos os elementos da lista
document.querySelectorAll(".piloto-f1-atual").length;
//6
document.querySelectorAll(".pilotos-sem-titulo .pilotos-f1-atual ");



textMaiusculo = document.getElementsByTagName("p")[0].innerText.toUpperCase();
document.getElementsByTagName("p")[0].innerText = textMaiusculo;
