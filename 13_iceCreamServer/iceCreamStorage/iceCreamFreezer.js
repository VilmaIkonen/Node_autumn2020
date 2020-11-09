'use strict';

const path = require('path');

const {read} =require('../library/handler'); /* hardcoded requiring, not nice. can be also parametrized */

const jsonPath = path.join(__dirname, 'iceCream.json') /* cannot be required as the file will be read every time it is used. If requiring, would return a static file */


// ----- Function for getting all flavors ----- //
const getAllFlavors = async () => {
    try {
        const data = await read(jsonPath);
        const iceCreams = await JSON.parse(data.fileData);
        return Object.keys(iceCreams);
    }
    catch (err){
        return [];
    }
}

// ----- Function for checking if flavor is available ----- //
/* Will return true or false, either has flavor or not */
const hasFlavor = async flavor => {
    try {
        const data = await read(jsonPath); /* will return object with {filedata, mime} */
        const iceCreams = JSON.parse(data.fileData);
        return Object.keys(iceCreams).includes(flavor); /* will be true or false, no need for if-statement. This is case-sensitive. */
        /* If want to overcome case-sensitivity -->
        return Object.keys(iceCreams).map(iceCreamFlavor => iceCreamFlavor.toLowerCase()).includes(flavor.lowerCase()); */        
    }
    catch(err) {
        return false;
    }
}

// ----- Function for getting the ice cream with all connected info ----- //

const getIceCream = async flavor => {
    try {
        const data = await read(jsonPath);
        const iceCreams = JSON.parse(data.fileData);
        return iceCreams[flavor] || null;
    }
    catch(err){
        return null;
    }
}

module.exports={getAllFlavors, hasFlavor, getIceCream}


// Some tests:
// getAllFlavors().then(flavors => console.log(flavors));

// hasFlavor('Vanilla').then(result => console.log(result)).catch(err => console.log(err));

// getIceCream('vanilla').then(iceCream => console.log(iceCream)).catch(err => console.log(err));