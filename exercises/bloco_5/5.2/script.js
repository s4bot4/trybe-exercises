const elemento = document.getElementById('elementoOndeVoceEsta');
elemento.style.color = 'red'
const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
    primeiroFilhoDoFilho.innerText = 'primeiro Filho Do Filho';

    function showParagraphs() {
        let paragraphs = document.getElementsByTagName('div');
        for (let index = 0; index < paragraphs.length; index += 1) {
          paragraphs[index].style.background = 'yellow';
          //console.log(paragraphs[index].innerText);
        }
      }
      showParagraphs();

  //createElement() cria elemento de forma dinâmica


  let quantidaDeFilhos = [ 
    'jose',
    'jose',
    'jose',
    'jose',
    'jose',
    'jose',
    'jose',
    'jose',
    'jose',
    'jose',
    'jose',
  ];
  //recupera lista
let filhosList = document.querySelector('.quartoEUltimoFilho');

for (let index = 0; index < quantidaDeFilhos.length; index += 1) {
  let son = quantidaDeFilhos[index];
//createElement() cria elemento de forma dinâmica
  let adicionaFilhos = document.createElement('li');
  adicionaFilhos.innerText = son;
  //console.log(adicionaFilhos);
//appendChild(parametro) adiciona elemento que a gente cria
filhosList.appendChild(adicionaFilhos)
//adicionar classe 
adicionaFilhos.className = 'listadeFilhos';
//console.log(filhosList)
}
//remove elementos
let nomeFilhos = document.querySelectorAll('.listadeFilhos');
//console.log(nomeFilhos)
//percorre os elementos do array "nomesFilhos"
for (let index = 0; index < nomeFilhos.length; index += 1) {
let element = nomeFilhos[index];
// se tiver a palavra "jose" 
if ( element.innerText.includes('jose')) {
 //remover a palava 
  filhosList.removeChild(element);
}
}
//Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .
const father = document.querySelectorAll('.paiDoPai');

 for (let indice = 0; indice < father.length; index += 1) {
   let filhosToRemove = father[indice];
   console.log(filhosToRemove);

 }

// 1. Crie um irmão para `elementoOndeVoceEsta`.
const pai = document.getElementById('pai');
const irmaoElementoOndeVoceEsta = document.createElement('section');
irmaoElementoOndeVoceEsta.id= 'irmaoElementoOndeVoceEsta';
pai.appendChild(irmaoElementoOndeVoceEsta);
//console.log(irmaoElementoOndeVoceEsta);
irmaoElementoOndeVoceEsta.innerHTML = 'Irmão do Elemento Onde Voce Esta'

    // 2. Crie um filho para `elementoOndeVoceEsta`.
    const filhoElementoOndeVoceEsta = document.createElement('div');
    filhoElementoOndeVoceEsta.id = 'filhoElementoOndeVoceEsta' ;
    elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta);
    //console.log(filhoElementoOndeVoceEsta);
    filhoElementoOndeVoceEsta.innerText = 'filhoElementoOndeVoceEsta'
//  //cria o elemento que quer criar
    const filhodoPrimeiroFilhoDoFilho = document.createElement('div');
  //cria o id do elemento que quer criar
    filhoElementoOndeVoceEsta.id = 'filhoElementoOndeVoceEsta';
  
    elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta);
    //console.log(filhoElementoOndeVoceEsta);
    filhoElementoOndeVoceEsta.innerText = 'filhoElementoOndeVoceEsta'

 
  



    