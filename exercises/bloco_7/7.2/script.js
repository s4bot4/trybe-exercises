// const printName = () => {
//     const myName = "Lucas";
//     return myName;
//   }
//   console.log(printName());

//   const multiplication = (number, multi) => number * multi;
// console.log(multiplication(8, 2));

function testingScope(escopo) {
    if (escopo === true) {
      var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
      console.log(ifScope);
    } else {
      var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
    console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
  }
  testingScope(true);

    const testingScope = escopo => {
        if (escopo === true) {
            let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
            ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
            console.log(ifScope);
          } else {
            let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
            console.log(elseScope);
          }
}   
testingScope(true);

// for (index = 0; index < oddsAndEvens.length; index += 1)
// console.log(oddsAndEvens[index])

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

let sortedOddsAndEvens = oddsAndEvens.sort()
console.log(`Os números ${sortedOddsAndEvens} e encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉s


const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => {
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7;
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;

  return oddsAndEvens;
}

const sortedArray = sortOddsAndEvens();
console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente !`);

// exercicio 1 - bloco 7.1
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
oddsAndEvens.sort(function(a, b) { return a - b});

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);


const fatorial  = num => {
  if(num === 1) {let res = 1} else { res = num*fatoratial(num-1)} 
  return res;
}
const y = fatorial(x)
const x = 3
console.log(y);

//Objects

const customer1 = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
  
  console.log(customer1);
  
  customer1.lastName = 'Faria';
  console.log(customer1);
//

  const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
  
  let newKey = 'lastName';
  const lastName = 'Ferreira';
  customer[newKey] = lastName;
  newKey = 'fullName';
  const fullName = `${customer.firstName} ${customer.lastName}`;
  customer[newKey] = fullName;
  console.log(customer);
  
  // array como objeto com ordenação aleatória por chave
var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(an_obj)); // console: ['2', '7', '100']

const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };
  
  const listSkills = (student) => {
    const arrayOfSkills = Object.keys(student);
    for(index in arrayOfSkills){
      console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
    }
  };
  
  console.log('Estudante 1');
  listSkills(student1);
  
  console.log('Estudante 2');
  listSkills(student2);

  const países = {
    França: 'Paris',
    Brasil: 'Brasília',
    Espanha: 'Madrid',
    Portugal: 'Lisboa',
  };
  const pairKeyValue = Object.entries(países);
  console.log(pairKeyValue);
  for(index in pairKeyValue) {
    console.log('--------');
    console.log('País:', pairKeyValue[index][0]);
    console.log('Capital:', pairKeyValue[index][1]);
  };