"use strict";

/* JS object */
const person = {
  firstname: "Lisa",
  lastname: "Koponen",
  phone: "0404455667",
};

console.log(person.firstname);
console.log(person.lastname);
console.log(person.phone);
console.log(person["phone"]);

person.age = 30;
console.log(person);
person["second name"] = "Mary";
console.log(person);

console.log(`My name is ${person.firstname} ${person["second name"]}`);

let field = "lastname";
console.log(field, person[field]);
field = "age";
console.log(field, person[field]);
