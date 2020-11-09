'use strict';

const path = require('path');

const {read} =require('../library/handler'); /* hardcoded requiring, not nice. can be also parametrized */

const jsonPath = path.join(__dirname, 'iceCream.json') /* cannot be required as the file will be read every time it is used. If requiring, would return a static file */

const getAllFlavors = async () => {
    try {
        const data = await read(jsonPath);
        const iceCreams = await JSON.parse(data.fileData);
        return Object.keys(iceCreams);
    }
    catch {
        return [];
    }
}