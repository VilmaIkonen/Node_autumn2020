'use strict';

const http = require('http');

const port = 3000;
const host = 'localhost';

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-type': 'text/html; chatset=utf-8' });
  response.write('<h1>Hello</h1>');
  response.end();
});

server.listen(port, host, () =>
  console.log(`Server ${host} is listening to ${port}`)
);
