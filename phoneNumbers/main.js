'use strict';

const phones = require('./phones.json');

for (let person of phones) {
  if (person.phones.number.length === 0) {
    message += ` has no numbers`;
  } else {
    message += ': ' + person.numbers.join(', ');
  }
  console.log(message);
}
