'use strict';

const { format } = require('path');
const persons = require('./persons.json');

function getAllPersons() {
    return persons;
}

function getWithFirstname(firstname){
    for(let person of persons){
        if (person.firstname === name){
            return[person];
        }
    }
    return[];
}

function getWithFirstname(firstname){
    for(let person of persons){
        if (person.firstname === name){
            return[person];
        }
    }
    return[];
}

function getWithLastname(lastname){
    for(let person of persons){
        if (person.lastname === name){
            return[person];
        }
    }
    return[];
}

function getWithAge(age){
    for(let person of persons){
        if (person.age === name){
            return[person];
        }
    }
    return[];
}


module.exports = { getAllPersons, getWithFirstname, getWithLastname, getWithAge };
  