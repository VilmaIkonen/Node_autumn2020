'use strict';

let cars = require('./cars.json');

/* ---- GET WITH LICENCE ----- */
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

if (getWithLicence('ABC-123')) {
  console.log('car found');
} else {
  console.log('car not found');
}

console.log('\n#################################\n');

const found = getWithLicence('ABC-123');
if (found) {
  console.log(found.model);
}

console.log('\n#################################\n');

/* ---- GET WITH MODEL ----- */

/* does not collect cars into an array, only prints out */
// function getWithModel(model) {
//   for (let i in cars) {
//     let carModel = cars[i].model;
//     let licence = cars[i].licence;
//     if (carModel === model) {
//       console.log(`${model} ${licence}`);
//     }
//   }
// }
// console.log(getWithModel('Hoppa'));

/* collecting found cars in to initially empty array */
function getWithModel(model) {
  const found = [];
  const modelLowerCased = model.toLowerCase(); /* lowercasing of input shoud be done outside for loop as it will cause lot of unnecessary calls as only small portion of inputs in in wrong format. (Lowercasing should not be needed here as this is not for user input) */
  for (let car of cars) {
    if (car.model.toLocaleLowerCase() === modelLowerCased) {
      found.push(car);
    }
  }
  return found;
}

console.log(getWithModel('Hoppa'));
console.log('\n#################################\n');
console.log(getWithModel('XXX'));
console.log('\n#################################\n');
console.log(getWithModel('Ovlov'));

for (let car of getWithModel('Hoppa')) {
  console.log(`Model: ${car.model}, licence: ${car.licence}`);
}
