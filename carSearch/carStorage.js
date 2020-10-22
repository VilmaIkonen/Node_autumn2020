'use strict';

const cars = require('./cars.json');

/* below function is added to exports objects (same as in module.exports = {...}) This can be used when there is only one function for export. If many, use module.exports at the end of file */
exports.getCar = (key, value) => {
  const carsFound = [];
  for (let car of cars) {
    if (car[key] === value) {
      carsFound.push(car);
    }
  }
  return carsFound;
};
