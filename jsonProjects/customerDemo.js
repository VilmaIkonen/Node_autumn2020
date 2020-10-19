"use strict";

const customers = require("./customers.json");

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
