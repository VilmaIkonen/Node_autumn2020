'use strict';

const http = require('http'); //'http' is a call module of Node, call modules can be found from API documentation

//host and port definition

const port = 3000;
const host = 'localhost'; //also ip address can be used here

const server = http.createServer((request, response) => {
  //server implementation
  response.writeHead(200, { 'Content-type': 'text/plain; chatset=utf-8' }); //200= status code for Ok, in brackets what is done
  response.write('Hello');
  response.end();
});
//starting server
server.listen(port, host, () =>
  console.log(`Server ${host} is listening to ${port}`)
);
