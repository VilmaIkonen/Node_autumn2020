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

/* ---- get number based on on name and type ----- */
function getNumbersByType(firstname, lastname, type) {
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

/* ---- get all numbers based on on name and type ----- */

function getAllNumbersByType(type) {
  if (!type) throw new Error('missing parameter');

  const nameAndNumbers = [];
  for (let person of phoneRegister) {
    for (let phone of person.phones) {
      if (phone.type === type) {
        nameAndNumbers.push({
          firstname: person.firstname,
          lastname: person.lastname,
          number: { type: phone.type, tel: phone.number },
        });
      }
    }
  }
  return nameAndNumbers;
}

/* ---- get all numbers ----- */

function getAllNumbers() {
  return phoneRegister;
}

/* ---- get name based on number ----- */

function getName(number) {
  for (let person of phoneRegister) {
    for (let phone of person.phones) {
      if (phone.number === number) {
        return { firstname: person.firstname, lastname: person.lastname };
      }
    }
  }
  return null;
}

module.exports = {
  getTypes,
  getNumbersByType,
  getAllNumbersByType,
  getAllNumbers,
  getName,
};
