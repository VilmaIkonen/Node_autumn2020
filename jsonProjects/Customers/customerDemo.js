'use strict';

const customers = require('../customers.json'); /* data taken from separate json-file */

console.log(customers[0].firstname); /* --> "Matt" */
console.log(`We have ${customers.length} customers`);
console.log(customers[2].bonus);

let sum = customers[0].bonus + customers[1].bonus + customers[2].bonus;
console.log(sum);

/* printing out customer firstnames with for loop */
for (let customer of customers) {
  console.log(customer.firstname);
}

/* can also loop over with regular */
for (let i = 0; i < customers.length; i++) {
  console.log(customers[i].firstname);
}

/* or */
customers.forEach((customer) => console.log(customer.firstname));

/* adding object to the array (does not effect cusctomers.json!) */
customers[3] = { firstname: 'Vera', lastname: 'River', bonus: 0 };

customers.push({ firstname: 'Peter', lastname: 'Smith', bonus: 20 });

customers[8] = { firstname: 'X', lastname: 'Y', bonus: 1000 };

console.log(customers);
console.log(customers.length);

/* remove empty objects from array. Start removing from index 5, 3 all together */
customers.splice(5, 3);
console.log(customers);

/* deleting object to the array, be careful! Takes out all expect first 3 objects in the array */

// customers.length = 3;
// console.log(customers);
