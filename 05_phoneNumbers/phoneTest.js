'use strict';

/* 1. Print name and phones and indend with tab */

const persons = require('./phones.json');

for (let person of persons) {
  console.log(`${person.firstname} ${person.lastname}`);

  for (let phone of person.phones) {
    console.log(`\t${phone.type} ${phone.number}`);
  }
}

console.log('#################################');

/* 2. Print name and phone types only*/

for (let person of persons) {
  console.log(person.lastname);
  const phoneTypes = [];
  for (let phone of person.phones)
    if (!phoneTypes.includes(phone.type)) {
      phoneTypes.push(phone.type);
    }
  // console.log('\t' + phoneTypes.join('\n\t'));
  console.log(`\t${phoneTypes.join('\n\t')}`);
}

console.log('#################################');

/* 3. Print work numbers for all person, if no number, name is not shown either (with 'work', Matt has 2 no.s and with 'mobile' Matt has no no. at all) */

for (let person of persons) {
  for (let phone of person.phones)
    if (phone.type === 'home') {
      console.log(`${person.firstname} ${person.lastname} ${phone.number}`);
    }
}

console.log('#################################');

/* Using .includes() in for-loop, searching */

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.includes(2));
// console.log(numbers.includes(126));

// console.log('#################################');

// for (let i = 0; i < 10; i++)
//   if (numbers.includes(i)) {
//     console.log(`Number ${i} is in the array`);
//   } else {
//     console.log(`Number ${i} is not in the array`);
//   }

// console.log('###############################');

// for (let i = 0; i < 10; i++)
//   if (!numbers.includes(i)) {
//     numbers.push(i);
//   } else {
//     console.log(`Number ${i} was already in the array`);
//   }
// console.log(numbers);
