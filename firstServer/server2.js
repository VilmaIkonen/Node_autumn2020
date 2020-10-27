'use strict';
//first require data from json
const person = require('./server2.json');
// after that, require http, port and host
const http = require('http');

// const port = process.env.PORT || 3000;
// const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ?? 3000; // ECMA2020 node v14 -->
const host = process.env.HOST || 'localhost';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-type': 'application/json' });
  res.end(JSON.stringify(person));
});

server.listen(port, host, () => console.log(`Server ${host}, port ${port}`));
