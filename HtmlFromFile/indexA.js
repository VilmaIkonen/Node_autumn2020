'use strict';

const http = require('http'); //HTTP module from Node
const fs = require('fs'); //File system module from node libraty for transferring html from a file not as function as in example carsWithRequest/index.js
const path = require('path'); //Path module from Node

const { port, host } = require('./config.json');

const homePath = path.join(__dirname, 'home.html'); //2 alaviivaa ennen dirname!

// console.log(homePath);

const server = http.createServer((req, res) => {
  fs.readFile(homePath, 'utf8', (err, data) => {
    //err, data = callback function
    if (err) {
      res.statusCode = 404;
      res.end(err.message); //only for debugging, do not show to the user!
    } else {
      res.writeHead(200, {
        'Content-type': 'text/html',
        'Content-length': Buffer.byteLength(data, 'utf8'), //browser needs to know how long the data is
      });
      res.end(data);
    }
  });
});

server.listen(port, host), () => console.log(`${host}: ${port} is running`);
