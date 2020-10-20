"use strict";

const person = require("./person.json");

console.log(person);
console.log(person.age);
console.log(++person.age);
console.log(person);

/* changes in this code are only effective in this copy, not in person.json! */
