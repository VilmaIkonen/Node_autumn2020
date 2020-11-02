'use strict';

// Creating server with function and make it serve two separate files

const http = require('http');
const path = require ('path');
const fs = require ('fs'); 
const url = require ('url');

const {port, host} = require('./config.json');

// creating two separate paths for separate pages
const homePath = path.join(__dirname, 'home.html');
const pageA = path.join(__dirname, 'pageA.html')

const server = http.createServer( (req, res) => {
    const urlData = url.parse(req.url, true);
    const route = decodeURIComponent(urlData.pathname); // decodes ä,ö,å etc.
    if(route ==='/'){
        sendFile(res, homePath);
    } else if (route === '/pagea'){
    sendFile(res, pageA);
    } 
    else {
        res.statusCode = 404;
        res.end('Error: page not found')
    }
    
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

// When 