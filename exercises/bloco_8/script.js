const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
  repeat(3, (number) => {
    if (number % 2 === 0) {
      console.log(number, 'is even');
    }
  });
  const arr1 = [1, 2, 3];
  const arr2 = [];
  for(let i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i] * 2);
  }
  // prints [ 2, 4, 6 ]
  console.log(arr2);


  const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
  arrayOfValues.forEach((indexOfTheArray, theEntireArray, element) => {
    console.log('Cada elemento do array:', element);
    console.log('Index, posição do elemento:', indexOfTheArray);
    console.log('Array percorrido:', theEntireArray);
  });
  
  // => ---------------
  //   Cada elemento do array: josé
  //   Index, posição do elemento: 0
  //   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
  //   ---------------
  //   Cada elemento do array: 50
  //   Index, posição do elemento: 1
  //   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
  //   ---------------
  //   Cada elemento do array: 0.25
  //   Index, posição do elemento: 2
  //   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
  //   ---------------
  //   Cada elemento do array: { comida: 'Chocolate' }
  //   Index, posição do elemento: 3
  //   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const multipliesFor2 = (element) => {
    console.log(`${element} * 2: ${element * 2}`);
  };
  
  numbers.forEach(multipliesFor2);
  
  const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

  const convertToUpperCase = (name, index) => {
    names[index] = name.toUpperCase();
  };
  
  names.forEach(convertToUpperCase);
  console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]




  const wakeUp = (wake) => console.log('Acordando!');

  // Ao chamar a função doingThings:
doingThings(wakeUp); 

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!