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
  //if statement check from which root the user comes in, see serverUsage.md. Also switch case could be used here. Also an option: /search?model=Hoppa or /search?licence=ABC-123
  if (route === '/cars') {
    result = getAllCars();
  } else if (route === '/search/bylicence' && urlData.query.licence) {
    result = getWithLicence(urlData.query.licence);
  } else if (route === '/search/bymodel' && urlData.query.model) {
    result = getWithModel(urlData.query.model);
  }
  // res.writeHead(200, { 'Content-type': 'application/json' });
  // res.end(JSON.stringify(result, null, 4)); //First version

  //this version used with function creation below.
  res.writeHead(200, { 'content-type': 'text/html; carset=utf-8' });
  res.end(createHTML(result));
});

server.listen(config.port, config.host, () =>
  console.log(`Server ${config.host}, port: ${config.port}`)
);

//Using function for creating the page. html string copied from result.html (easier to write there). Cars collected with for-of loop
function createHTML(resultArray) {
  let htmlString = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Cars</title>
    </head>
    <body>
      <h1>Search result</h1>
      <table>
        <thead>
          <th>Model</th>
          <th>Licence</th>
        </thead>
        <tbody>`;

  for (let car of resultArray) {
    htmlString += `<tr>
    <td>${car.model}</td><td>${car.licence}</td></tr>`;
  }

  htmlString += `</tbody> 
      </table>
    </body>
  </html>`;
}
