'use strict';

const phones = require('./phones');
console.log(phones);

/* first number of the first person */
console.log(phones[0].numbers[0]);
/* second number of the first person */
console.log(phones[0].numbers[1]);

/* first person and his first number */
console.log(phones[0].firstname, phones[0].numbers[0]);

console.log('\n#################################\n');

/* ----- print all names and numbers ----- */

/* 1st= outer loop for persons array, 2nd=inner for-loop for numbers arrays */
for (let person of phones) {
  for (let number of person.numbers) {
    console.log(`${person.firstname} ${person.lastname}: ${number}`);
  }
}

console.log('\n#################################\n');

/* ------ print name and numbers in one row, not on separate ones ----- */
for (let person of phones) {
  if (person.numbers.length === 0) {
    console.log(`${person.firstname} ${person.lastname} has no numbers`);
  } else {
    let message = `${person.firstname} ${person.lastname}: `;
    for (let i = 0; (i = person.numberslenght - 1); i++) {
      /* length-1 prevents comma (,) after last number. Last number added with following message-row */
      message += `${person.numbers[i]}`;
    }
    message += person.numbers[person.numbers.length - 1];
    console.log(message);
  }
}

console.log('\n#################################\n');

/* OR */
for (let person of phones) {
  let message = `${person.firstname} ${person.lastname}`;
  if (person.numbers.length === 0) {
    message += ` has no numbers`;
  } else {
    message += ': ';
    for (let i = 0; i < person.numbers.length - 1; i++) {
      message += `${person.numbers[i]}, `;
    }
    message += person.numbers[person.numbers.length - 1];
  }
  console.log(message);
}

console.log('\n#################################\n');

/* OR */
for (let person of phones) {
  let message = `${person.firstname} ${person.lastname}`;
  if (person.numbers.length === 0) {
    message += ` has no numbers`;
  } else {
    message += ': ' + person.numbers.join(', ');
  }
  console.log(message);
}

console.log('\n#################################\n');

/* OR */
for (let person of phones) {
  let message = `${person.firstname} ${person.lastname}`;
  message +=
    person.numbers.length === 0
      ? ' has no numbers'
      : `: ${person.numbers.join(', ')}`;
  console.log(message);
}

console.log('\n#################################\n');

/* OR */
for (let person of phones) {
  const { firstname, lastname, numbers } = person;
  if (numbers.length === 0) {
    console.log(`${firstname} ${lastname} has no numbers`);
    continue;
  }
  console.log(`${firstname} ${lastname}: ${numbers.join(', ')}`);
}

console.log('\n#################################\n');
