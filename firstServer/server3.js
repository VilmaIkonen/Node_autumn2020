'use strict';

const person = require('./server2.json');

const http = require('http');

const port = process.env.PORT ?? 3000;
const host = process.env.HOST ?? 'localhost';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' });
  res.write(`<!DOCTYPE html>
  <html>
    <head>
        <meta charset="utf-8">
        <title>Server3 test</title>
    </head>
    <body>
        <h1>Person</h1> 
        <h2>${person.firstname} ${person.lastname}</h2>
    </body>
  </html>`);
  res.end();
});

server.listen(port, host, () => console.log(`Server: ${host}, port: ${port}`));
