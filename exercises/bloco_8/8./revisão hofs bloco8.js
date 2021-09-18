
// Hofs sao funções que recebem outra funções como parametro e ou retronam outra função
() => {}
(() => {}) => () => {}

const casa = {
    quarto: () => 'dormir',
    sala: 'Local para passar o tempo',
}
console.log(casa.sala());

// Callback
// callback é uma função chamada dentro de outra função
const arrayText = [ 'c', 'a', 'g', 'e', 'b', 'd', 'f'];
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ];

const selectPAR = (numero) => numero % 2 === 0;
console.log(selectPAR(numero));
const numerosPares = array.map((numero) => { return numero % 2 === 0 ? numero : 'não é par';
});
console.log(numerosPares);

// sort
ra
