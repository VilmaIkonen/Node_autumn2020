'use strict';

const http = require('http');
const path = require ('path');
const fs = require ('fs'); //const fs = require('fs').promises

// object destructuring
const {port, host} = require('./config.json');

const homePath = path.join(__dirname, 'home.html');

// with Promises API version
const server = http.createServer( async (req, res) => {
    try{
        // await: process will wait for fs.promises... to be ready before it will execute res.writeHead...
        const data = await fs.promises.readFile(homePath, 'utf8');
        // const data = await fs.readFile(homePath, 'utf8');
        res.writeHead(200, {'Content-type':'text/html', 'Content-length':Buffer.byteLength(data, 'utf8')});
        res.end(data);
    }
    catch(err){
        res.statusCode=404;
        res.end(`Error: ${err.message}`);
    }
});

server.listen(port, host, () => console.log(`Server running, ${host}: ${port}`));