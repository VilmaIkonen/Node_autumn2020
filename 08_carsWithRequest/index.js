//Clean version of code

'use strict';
/* ---------------- GLOBAL --------------------- */
const http = require('http');
const url = require('url');

const config = require('./config.json');

const { getAllCars, getWithLicence, getWithModel } = require('./carStorage');

/* ---------------- SERVER Function --------------------- */
const server = http.createServer((req, res) => {
  const urlData = url.parse(req.url, true);
  const route = urlData.pathname;

  let result = [];

  if (route === '/cars') {
    result = getAllCars();
  } else if (route === '/search/bylicence' && urlData.query.licence) {
    result = getWithLicence(urlData.query.licence);
  } else if (route === '/search/bymodel' && urlData.query.model) {
    result = getWithModel(urlData.query.model);
  }

  res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
  res.end(createHTML(result));
});

server.listen(config.port, config.host, () =>
  console.log(`Server ${config.host}, port: ${config.port}`)
);

/* ---------------- HTML creation function --------------------- */
/* ------------ HTML can be also imported with read file! ---------------- */
/* -----Nodejs.org --> File system --> Readfile path options ----------- */
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

  return htmlString;
}
