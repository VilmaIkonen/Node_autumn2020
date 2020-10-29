'use strict';

/* {getCar} gets get-functions from carStorage. get is only name of the function, could be also e.g. getX or getVehicle etc.. */
/* const below defines module */
const { getCar } = require('./carStorage');

console.log(getCar('model', 'Hoppa'));

console.log(getCar('licence', 'ABC-123'));

console.log(getCar('price', 19800));
