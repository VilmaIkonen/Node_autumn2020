'use strict';

// Creating server with function!

const http = require('http');
const path = require ('path');
const fs = require ('fs'); 

const {port, host} = require('./config.json');

const homePath = path.join(__dirname, 'home.html');

const server = http.createServer( (req, res) => {
   sendFile(res, homePath);
});

// Server with function
server.listen(port, host, () => console.log(`Server running, ${host}: ${port}`));

async function sendFile(res, filePath){ 
    try{
    const data = await fs.promises.readFile(filePath, 'utf8');
    res.writeHead(200, {'Content-type':'text/html', 'Content-length':Buffer.byteLength(data, 'utf8')});
    res.end(data);
    }
    catch(err){
        res.statusCode=404;
    res.end(`Error: ${err.message}`);
}}