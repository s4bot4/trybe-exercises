/*Nos exercícios de hoje, você vai fazer quinze pequenos programas. Todos trabalham a lógica condicional ( if/else e switch/case ), operadores aritméticos ( + , - , * , / , % ) e operadores lógicos ( > , < , && , || ). Para que consiga executar seus códigos recomendamos que utilize a extensão Code Runner , você pode ver mais sobre ela no conteúdo que fizemos sobre o uso do VS Code .
Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. Faça programas para:

Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b)

let a = 5;
let b = 5;


console.log('Soma: ' + (a + b));
console.log('Subtração: ' + (a - b));
console.log('Multiplicação: ' + (a * b));
console.log('Divisão: ' + (a / b));
console.log('Módulo: ' + (a % b));

Dica: Neste link você encontra mais detalhes sobre operadores matemáticos 😉
Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.


numeroA = 35
numeroB = 20

if (numeroA > numeroB) {
  console.log(numeroA + ' é maior que número B');
}else {
  console.log(nuumeroB + ' é maior que número A');
};




Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

A = 50
B = 20
C = 30

if (A > B && A > C) {
  console.log("Número a é maior")
} else if (B > A && B > C) {
  console.log("Número b é maior")
} else {
  console.log("Número c é maior")
};



Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

let a = 11

if (a > 0) {
  console.log("positive");
} else if ( a < 0) {
  console.log("negative");
} else {
  console.log("zero");
};



Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo.
 Retorne true se os ângulos representarem os ângulos de um triângulo 
 e false , caso contrário. 
 Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
Um ângulo será considerado inválido se não tiver um valor positivo.

let degreeAngleA = 1;
let degreeAngleB = 100;
let degreeAngleC = 15;

let sumOfAngles = degreeAngleA + degreeAngleB + degreeAngleC;

let allAnglesArePositives = degreeAngleA > 0 && degreeAngleB > 0 && degreeAngleC > 0;

if(allAnglesArePositives){
  if (sumOfAngles === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Erro: ângulo inválido');
}



Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz. ok
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais. ok
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) . ok
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop (bispo) -> diagonals (diagonais)

let pieceMovement = "Kiara"
let uppecasePiece = pieceMovement.toLowerCase();
switch (uppecasePiece) {
  case "peão": 
   console.log(uppecasePiece + ' se movimenta para frente');
   break;
  
  case "cavalo":
    console.log(uppecasePiece + ' se movimenta em L');
  break;

  case "bispo":
    console.log(uppecasePiece + ' se movimenta em diagonal');
  break;

  case "torre":
    console.log(uppecasePiece + ' se movimenta em linhas retas, tanto pra cima e para baixo como para esquerda ou direita');
  break;

  case "rei":
    console.log(uppecasePiece + " se  movimenta para todas direções, porém anda somente uma casa");
  break;

  case "rainha":
    console.log(uppecasePiece + " se  movimenta para todas direções, quantas casas necessitar");
  break;

  default:
    console.log("Erro! Peça não encontrada!")
}

Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.



let grade = 76;

if (grade < 0 || grade > 100) {
  console.log("Erro, nota incorreta!");
} else if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else if (grade >= 60) {
  console.log("D");
} else if (grade >= 50) {
  console.log("E");
} else {
  console.log("F");
}

8 Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
Bonus: use somente um if .


let numberA = 5
let numberB = 5
let numberC = 5
let isEven = false
if ((numberA % 2 === 0 || numberB % 2 === 0 || numberC % 2 === 0)) {
  isEven = true;
};
console.log(isEven);



let a = 5;
let b = 5;
let c = 5;

let isEven = false;

if ((a % 2 === 0 || b % 2 === 0 || c % 2 === 0)) {
  isEven = true;
};
console.log(isEven);



10 -  Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda.*/
let valorDeVenda = 9500.00;
let valorDeCustoUnitario = 4000.00;
let impostoSobreOCusto = 1.20;
let totalDeProdutos = 1000


/*A partir dos valores, calcule quanto de lucro (valor de venda descontado o 
custo do produto) a empresa terá ao vender mil desses produtos.*/
valorDeVenda = (valorDeCustoUnitarioTotal * totalDeProdutos)

/* Atente que, sobre o custo do produto, incide um imposto de 20%.

 - O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.*/

 valorCustoUnitarioTotal = (valorVenda - (valorCustoUnit * impostoSobreOCusto));


/*- Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.*/
if (valorVenda < 0 || valorCusto < 0 || impostoSobreOCusto < 0) {
  break
} 
console.log("Erro. Valor inválido")










 

Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:

INSS (Instituto Nacional do Seguro Social)
Salário bruto até R$ 1.556,94: alíquota de 8%
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

IR (Imposto de Renda)
Até R$ 1.903,98: isento de imposto de renda
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

Exemplo : Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.

Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
R$ 2.670,00: salário com INSS já deduzido;
7.5%: alíquota de imposto de renda;
R$ 142,80 parcela a se deduzir do imposto.
Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.

Resultado: R$ 2.612,55.
Dica: que tal identificar as alíquotas com variáveis de nomes explicativos?