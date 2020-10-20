'use strict';

let cars = require('./cars.json');
// console.log(cars);

// for (let car of cars) {
//   if (car.model === 'Hoppa') {
//     console.log(car);
//   }
// }

// console.log('\n#################################\n');

// for (let car of cars) {
//   if (car.licence === 'ABC-123') console.log(car);
// }

// console.log('\n#################################\n');

function getWithLicence(licence) {
  for (let car of cars) {
    if (car.licence === licence) {
      return car;
    }
  }
  return null;
}

console.log(getWithLicence('ABC-123'));
console.log(getWithLicence('ABC-1'));

function getWithModel(model) {
  let carsByModel = [];
  let i = 0;
  for (let car of cars) {
    if (car.model !== model) continue;
    if (car.model === model) {
      carsByModel.push(car[i]);
    }
  }
  return carsByModel;
}

console.log(getWithModel('Hoppa'));
