'use strict';

/* layering of data with module.exports & require */
const { getWithLicence, getWithModel } = require('./carStorage');

const car = getWithLicence('ABC-123');
if (car) {
  console.log(car.model);
}

for (let car of getWithModel('Hoppa')) {
  console.log(car.licence);
}
