let person = {
  name: 'Thiago',
  lastName: 'Ferreira',
  canDrive: true,
  age: 42,
  favoriteMovies: ['Clube da Luta', 'Batman Origins'],
  address {
    street: 'Rua XYZ',
    number: 190,
    city: 'São Paulo'
  }
}

    //Notacao de ponto (dot notation)
    console.log(person.name);
    
    // NOTACAO DE COLCHETES (BRACKET NOTATION)
    console.log(person['age']);

    let someProperty = 'favoriteMovies';
    console.log(person[someProperty]);
}


function greet(name, age) {
   console.log('O(A) ' + name + ' possui ' + age + "anos.");
}
greet('Ana',25);


function makeGreeting(name, age) {
  return 'E aí ' + name + '? Tudo bem com você? Você tem ' + age + ' anos.'; 
}

let greetings = makeGreeting('Vinicius', 23);
console.log(greetings)

function sum(a, b) {
  return a + b;
}
let a = 5;
let b = 7;
resultadosoma = sum()
console.log (resultadosoma)
