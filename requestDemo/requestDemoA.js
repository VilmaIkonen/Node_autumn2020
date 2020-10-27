'use strict';

const http = require('http');
const url = require('url');

const port = process.env.PORT ?? 3000;
const host = process.env.HOST ?? 'localhost';

const server = http.createServer((req, res) => {
  const urlData = url.parse(req.url, true);
  res.writeHead(200, { 'Content-type': 'application/json' });
  res.end(JSON.stringify(urlData));
});

server.listen(port, host, () =>
  console.log(`Server ${host} listening port ${port}`)
);

//on browser URL: localhost:3000/abc?model=Hoppa (searching data with model name) or localhost:3000abc?model=Hoppa&licence=XYZ-456
