const data = require('./iceCream.json');

console.log(Object.keys(data));
// prints out keys = "vanilla, strawberry..."

console.log(Object.values(data));
// prints out values = " "vanilla" {
//     "name": "Vanilla",
//     "price": 2
// } " etc...

Object.values(data).forEach(value => console.log(Object.keys(value)));
//prints out keys in array for each item 

console.log('###########################')

// Testing the hander.js //
const {read} = require('./library/handler.js')

const filePath='./test.js';

// then/catch good for one simple... async for more complicated
read(filePath)
    .then(result => console.log(result))
    .catch(err => console.log(err));

read('./iceCream.json')
    .then(result => console.log(result))
    .catch(err => console.log(err));

