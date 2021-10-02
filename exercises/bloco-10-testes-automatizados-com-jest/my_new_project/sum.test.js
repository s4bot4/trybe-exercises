const sum = require('./sum');

describe('sum', () => {  
  test('sums two values', () => {
    expect(sum(4, 5)).toBe(9);
  });
  test('throws an error when a string is passed', () => {
    expect(() => { 
      sum(4, '5');
    }).toThrow();
  });
  test('0 plus 0', () => {
    expect(sum(0, 0)).toBe(0);
  })
  test('test if the error message is "parameters must be number"', () => {
    expect(() => { sum(4, '5')}).toThrow(/parameters must be numbers/);
  })
 });

