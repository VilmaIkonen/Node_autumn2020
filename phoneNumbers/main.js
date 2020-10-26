'use strict';

const { getTypes, getNumbersByType = require('./telephones')}

console.log(getTypes());

console.log(getNumbersByType('Leila', 'Hökki', 'home'));
console.log(getNumbersByType('Matt', 'River', 'work'));
