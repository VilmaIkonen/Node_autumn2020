// SEPARATE FILE FOR TESTING THE FUNCTION

'use strict';

// connecting the function "search" from persons.js
const {search} = require('./persons.js');

//testing fucntion with console.log
console.log(search());

console.log('-------------------------------')

console.log(search('firstname', 'Jesse'));

console.log('-------------------------------')

console.log(search('age', 30));

console.log('-------------------------------')

console.log(search('age', '50')); // correct comparison even if no. is as string (== instead of ===)
console.log('-------------------------------')

console.log(search('x', 30)); // --> empty array

