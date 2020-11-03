'use strict';

const http = require('http');
const url = require('url');
const path = require('path');
const fs = require ('fs');
const {port, host} = require('./config.json');
const homePath = path.join(__dirname, 'home.html');
const { getAllPersons, getWithFirstname, getWithLastname, getWithAge } = require('./persons.js');
let result = [];

const server = http.createServer((req, res) => {
    const urlData = url.parse(req.url, true);
    const route = urlData.pathname;
        
    if (route === '/persons') {
        result = getAllPersons();
    } 
    sendFile(res, homePath);
});

server.listen(port, host, () => console.log(`Server running, ${host}: ${port}`));

async function sendFile(res, filePath){
    try {
        const result = await fs.promises.readFile(filePath, 'utf8');
        res.writeHead(200, {'Content-type':'text/html', 'Content-length':Buffer.byteLength(result, 'utf8')});
        res.end(result);
    }
    catch(err) {
        res.statusCode=404;
        res.end(`Error: ${err.message}`);
    }
}