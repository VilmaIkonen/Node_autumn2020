'use strict';

const http = require('http');
const url = require('url');

const port = process.env.PORT ?? 3000;
const host = process.env.HOST ?? 'localhost';

const server = http.createServer((req, res) => {
  const urlData = url.parse(req.url, true);
  console.log(urlData.query);
  const name = urlData.query.name;
  const lastname = urlData.query.lastname;
  res.writeHead(200, { 'Content-type': 'text/html' });
  res.end(`<h1>Hi ${name} ${lastname}! </h1>`);
});

server.listen(port, host, () => console.log(`Server ${host}, port${port}`));
//http://localhost:3000/?name=Matt --> Hi Matt
