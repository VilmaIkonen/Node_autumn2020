'use strict';

const numbers = [1, 2, 3, 4, 5];

console.log(numbers.join());
console.log(numbers.join(' + '));
console.log('(' + numbers.join('), (') + ')');
console.log(numbers.join(' ==###== '));

/* joining and printing out the sum with reduce () */
console.log(
  numbers.join(' + ') +
    ' = ' +
    numbers.reduce((prev, current) => prev + current)
);
