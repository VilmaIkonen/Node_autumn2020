'use strict';

const http = require('http'); //HTTP module from Node
const fs = require('fs'); //File system module from node libraty for transferring html from a file not as function as in example carsWithRequest/index.js
const path = require('path'); //Path module from Node

const { port, host } = require('./config.json');

const homePath = path.join(__dirname, 'home.html'); //2 alaviivaa ennen dirname! Path module "takes care of" the path form. We will mostly be using path.join (another one is path.extname)

// File system Node.js component. Has methods for reading and writing files. fs Promises API
const server = http.createServer((req, res) => {
  fs.readFile(homePath, 'utf8', (err, data) => {
    //err, data = callback function
    if (err) {
      res.statusCode = 404;
      res.end(err.message); //only for debugging, do not show to the user!
    } else {
      res.writeHead(200, {
        'Content-type': 'text/html',
        'Content-length': Buffer.byteLength(data, 'utf8'), //browser needs to know how long the data is. W/o, might miss last character from html(> --> result: no page shown at all)
      });
      res.end(data);
    }
  });
});

server.listen(port, host), () => console.log(`${host}: ${port} is running`);
