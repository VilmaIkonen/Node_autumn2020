'use strict';

const http = require('http'); //'http' is a call module of Node, call modules can be found from API documentation

//host and port definition
const port = 3000; //random port number, must use non-reverved one (list of reserved ports in wiki)
const host = 'localhost'; //also ip address can be used here, e.g. localhost = '127.0.0.1'

//request brings data to this server, response goes back to sender
const server = http.createServer((request, response) => {
  //server implementation
  response.writeHead(200, { 'Content-type': 'text/plain; chatset=utf-8' }); //200= status code for Ok, in brackets what is done. writeHead writes head for the response. in {} data for what sort f data is coming in with the response
  response.write('Hello');
  response.end(); // .write and .end lines can be combined --> .end('Hello!)
});
//starting server
server.listen(port, host, () =>
  console.log(`Server ${host} is listening to ${port}`)
);

//Viewing in browser: on URL. "localhost:3000"
