'use strict';

const {
  getTypes,
  getNumbersByType,
  getAllNumbersByType,
  getAllNumbers,
  getName,
} = require('./telephones');

console.log(getTypes());

console.log(getNumbersByType('Leila', 'Hökki', 'home'));
console.log(getNumbersByType('Matt', 'River', 'work'));

try {
  console.log(getNumbersByType('s'));
} catch (err) {
  console.log('Error: ' + err.message);
}

console.log(getAllNumbersByType('work'));

try {
  console.log(getAllNumbersByType());
} catch (err) {
  console.log(err.message);
}

console.log(getAllNumbers()); //console logs phones as objects. JSON.stringify to print them out. Or make a for-loop

console.log(getName('22334455'));
console.log(getName('1'));
