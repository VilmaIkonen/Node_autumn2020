'use strict';

const persons = require('./phones.json');

for (let person of persons) {
  console.log(`${person.firstname} ${person.lastname}`);

  for (let phone of person.phones) {
    console.log(`\t${phone.type} ${phone.number}`);
  }
}

/* Using .includes() in for-loop, searching */

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.includes(2));
console.log(numbers.includes(126));

for (let i = 0; i < 10; i++)
  if (numbers.includes(i)) {
    console.log(`Number ${i} is in the array`);
  } else {
    console.log(`Number ${i} is not in the array`);
  }

console.log('###############################');

for (let i = 0; i < 10; i++)
  if (!numbers.includes(i)) {
    numbers.push(i);
  } else {
    console.log(`Number ${i} was already in the array`);
  }
console.log(numbers);
