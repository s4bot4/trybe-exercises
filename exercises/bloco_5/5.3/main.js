const firstDiv = document.getElementById('first-div');
const secondDiv = document.getElementById('second-div');
const thirdDiv = document.getElementById('third-div');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


 /*Copie esse arquivo e edite apenas ele;

 1 Crie uma função que adicione a classe 'tech' ao elemento selecionado;


 */
 //objeto que contém infos sobre o evento disparado
 function classTech(event) {
  //selecionando o elemento com a classe tech
  //doc: https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList
    const bodyDiv = document.querySelector('.tech');
    //removendo a classe tech do elemento capturado acima
        bodyDiv.classList.remove('tech');
     
    event.target.classList.add('tech');
    
} console.log(classTech)
firstDiv.addEventListener('click', classTech)
secondDiv.addEventListener('click', classTech)
thirdDiv.addEventListener('click', classTech)


/*Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

 // 2 Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';

 3 Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;

1. Que tal redirecionar para seu portifólio?
 Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;

Segue abaixo um exemplo do uso de event.target:
*/

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstDiv.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.