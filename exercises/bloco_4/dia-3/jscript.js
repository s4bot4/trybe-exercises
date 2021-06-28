
  //1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

 // Ex
  // exercicio 3
  let number = 5;

for (let index = 1; index <= number; index++) {
  let line = '';
  let asterisco = number - index;

  for (let otherIndex = 0; otherIndex < number; otherIndex++) {
    if (line.length < asterisco) {
      line += ' '
    } else {
      line += '*'
    }
  }
  
  console.log(line);
}

let n;

n = 5;



for (let index = (n-1); index >= 0; index -= 1) {
    linha = '';
    for(let i = 1; i <= index; i +=1){
        linha += ' ';
        
    }
    for (let i = index; i < n; i += 1 ) {
    
        linha += '*';
        
    } 
    console.log(linha);
}
