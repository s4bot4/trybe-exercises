// testa igualdade estrita entre o valor passado para expect e seu argumento. Isso significa, por exemplo, que um teste com o expectation abaixo falharia porque a string "5" não é igual ao número 5.
expect(5).toBe("5")


// Para testar igualdade de objetos e arrays, é preciso usar o matcher toEqual , que acessa cada elemento do objeto ou array, fazendo um trabalho de comparação específico e que retorna uma resposta mais voltada para a necessidade dos testes:
let name = "Pedro";
let firstName = name;

name = "Carol";

console.log(name); // Carol
console.log(firstName); // Pedro


// Para testar igualdade de objetos e arrays, é preciso usar o matcher toEqual , que acessa cada elemento do objeto ou array, fazendo um trabalho de comparação específico e que retorna uma resposta mais voltada para a necessidade dos testes:
test('array and object equality', () => {
    const arr = [1, 2 ,3];
    const obj = { a: 1, b: 2, c: 3};
  
    expect(arr).toBe([1, 2, 3]); // fails
    expect(obj).toBe({ a: 1, b: 2, c: 3}); // fails
    expect(arr).toEqual([1, 2, 3]); // OK
    expect(obj).toEqual({ a: 1, b: 2, c: 3}); // OK
  });

//   In tests, you sometimes need to distinguish between undefined, null, and false, but you sometimes do not want to treat these differently. Jest contains helpers that let you be explicit about what you want.

//   toBeNull matches only null
//   toBeUndefined matches only undefined
//   toBeDefined is the opposite of toBeUndefined
//   toBeTruthy matches anything that an if statement treats as true
//   toBeFalsy matches anything that an if statement treats as false

// If you want to test whether a particular function throws an error when it's called, use toThrow.

function compileAndroidCode() {
  throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);

  // You can also use the exact error message or a regexp
  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
  expect(() => compileAndroidCode()).toThrow(/JDK/);
});

// exemplo 2

const multiplyByTwo = (number) => {
    if (!number) {
      throw new Error('number é indefinido')
    }
    return number * 2;
  };
  multiplyByTwo(4);
  
  test('testa se multiplyByTwo retorna o resultado da multiplicação', () => {
    expect(multiplyByTwo(4)).toBe(8);
  });
  test('testa se é lançado um erro quando number é indefinido', () => {
    expect(() => { multiplyByTwo() }).toThrow();
  });
  test('testa se a mensagem de erro é "number é indefinido"', () => {
    expect(() => { multiplyByTwo() }).toThrowError(new Error('number é indefinido'));
  });

  // toContain e not

  const workDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const weekDays = ['Sunday', ...workDays, 'Saturday'];

test('Sunday is a week day', () => {
  expect(weekDays).toContain('Sunday');
});

test('Sunday is not a workday', () => {
  expect(workDays).not.toContain('Sunday');
});

// O bloco describe - a função describe cria um bloco para agrupar vários testes. Isso é útil para melhorar a organização dos seus testes. 

const myBeverage = {
    delicious: true,
    sour: false,
  };
  
  describe('my beverage', () => {
    test('is delicious', () => {
      expect(myBeverage.delicious).toBeTruthy();
    });
  
    test('is not sour', () => {
      expect(myBeverage.sour).toBeFalsy();
    });
  });

  const binaryStringToNumber = binString => {
    if (!/^[01]+$/.test(binString)) {
      throw new CustomError('Not a binary number.');
    }
  
    return parseInt(binString, 2);
  };
  console.log(binaryStringToNumber('100'))

  describe('binaryStringToNumber', () => {
    describe('given an invalid binary string', () => {
      test('composed of non-numbers throws CustomError', () => {
        expect(() => binaryStringToNumber('abc')).toThrowError(CustomError);
      });
  
      test('with extra whitespace throws CustomError', () => {
        expect(() => binaryStringToNumber('  100')).toThrowError(CustomError);
      });
    });
  
    describe('given a valid binary string', () => {
      test('returns the correct number', () => {
        expect(binaryStringToNumber('100')).toBe(4);
      });
    });
  });
