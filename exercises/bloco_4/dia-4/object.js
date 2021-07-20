
let car = {
  type: 'Fiat',
  model: '500',
  color: 'white',
  models:['Toro', 'Siena', 'Tempra', 'Argo']
};
car['typeColor'] = car.type + ' ' + car.color;

//acesar a propriedade car type: 
//car.type

//acessar a propriedade car através de colchetes: 
//car['type']

console.log ('O novo carro da ' + car['type'] + ' modelo ' + car.model + " é da cor " + car.color);
//console.table(car);














