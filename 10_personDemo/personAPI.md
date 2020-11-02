# Person API

## persons.json
```json
[
    {"firstname": "Matt", "lastname": "River", "Age":30},
    {"firstname": "Jesse", "lastname": "River", "Age":10},
    {"firstname": "Mary", "lastname": "Smith", "Age":50}
]
```

## Dataleyer for persons

## function **search**

Function returns a person objects in an array. Search criterion is passed to the function as paramaters. If paramaters are missing, all persons will be returned.

- search() returns all person objects in an array
- search(key, value) returns all matching persons as an array

If no person is found, an empty array is returned.

# Usage

## serach all persons
http://localhost:3000/persons

## search persons by firstname
http://localhost:3000/persons/firstname?value=Matt

## search persons by lastname
http://localhost:3000/persons/lastname?value=River

## search persons by age
http://localhost:3000/persons/age?value=30

Server sends a webpage to the browser. use table element to show the data.