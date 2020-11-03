'use strict';

const persons = require('./persons.json');

exports.search = (key, value) => {
    if(key && value ){
        const found = [];
        for (let person of persons) {
            if(person[key] == value) { // == not as strict as === --> can check numbers and strings
                found.push(person);
            } 
                
        }
        return found;

    }
    else {
        return persons;
    }
}

  