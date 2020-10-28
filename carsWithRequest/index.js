'use strict';

const http = require('http');
const url = require('url');

//port and host info can be taken from .json file also!
const config = require('./config.json');

//functions imported from carStorage.js
const { getAllCars, getWithLicence, getWithModel } = require('./carStorage');

const server = http.createServer((req, res) => {
  const urlData = url.parse(req.url, true);
  const route = urlData.pathname;
  //all return array, empty will be returned if none of the statements below are true
  let result = [];
  //if statement check from which root the user comes in, see serverUsage.md. Also switch case could be used here
  if (route === '/cars') {
    result = getAllCars();
  } else if (route === '/search/bylicence' && urlData.query.licence) {
    result = getWithLicence(urlData.query.licence);
  } else if (route === '/search/bymodel' && urlData.query.model) {
    result = getWithModel(urlData.query.model);
  }
  res.writeHead(200, { 'Content-type': 'application/json' });
  res.end(JSON.stringify(result, null, 4));
});

server.listen(config.port, config.host, () =>
  console.log(`Server ${config.host}, port: ${config.port}`)
);
