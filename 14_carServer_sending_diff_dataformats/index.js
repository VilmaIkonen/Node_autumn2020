'use strict';

const http = require('http'); 
const path = require('path');

const config = require('./config.json');
const {redirectError} = require(path.join(__dirname,config.library.folder,'requesthandler.js'));

const handleGetRequests = require(path.join(__dirname, config.library.folder, config.library.getHandler));

const server = http.createServer((req, res) => {
    const method = req.method.toUpperCase();
    if(method === 'GET') {
        handleGetRequests(req, res);
    }
    else if(method === 'POST') {
        // to post function
    }
    else {
        redirectError(res, 'Resource in use')
    }
});

server.listen(config.port, config.host, () => console.log(`Server running ${config.host}: ${config.port}`));