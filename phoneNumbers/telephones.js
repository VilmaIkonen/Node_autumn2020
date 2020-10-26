'use strict';

const phoneRegister = require('./phones.json');

/* ---- get phonenumber types only ----- */
function getTypes() {
  const result = [];
  for (let person of phoneRegister) {
    for (let phone of person.phones)
      if (!result.includes(phone.type)) {
        result.push(phone.type);
      }
    return result;
  }
}

/* ---- get number based based on on name and type ----- */
function getNumbersByType() {
  if (firstname && lastname && type) {
    const numbers = [];
    for (let person of phoneRegister) {
      if (person.firstname === firstname && person.lastname === lastname) {
        for (let phone of person.phones) {
          numbers.push(phone.number);
        }
      }
    }
    return numbers;
  } else {
    throw new Error('missing parameter');
  }
}

module.exports = {
  getTypes,
  getNumbersByType,
};
