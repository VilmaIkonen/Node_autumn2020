'use strict';

const http = require('http');
const path = require('path');
const fs = require('fs').promises;

const {getUrlEncodedPostData} = require('./requesthandler')

const {port, host} = require('./config.json');

const formPath = path.join(__dirname, 'form.html');

// async added in createServer function as later --> await
const server = http.createServer(async (req, res) => {
    const method = req.method.toUpperCase() 
    if( method === 'GET') {
        sendFile(res, formPath);
    }
    else if(method === 'POST') {
        // send data back
        const formData = await getUrlEncodedPostData(req);
        res.writeHead(200, { 'Content-type':'application/json'})
        res.end(JSON.stringify(formData));
    }
})

server.listen(port, host, () => console.log(`Server ${host}: ${port} running`));

//File reader:
async function sendFile(res, path) {
    try {
        const data = await fs.readFile(path, 'utf8');
        res.writeHead(200, {'Content-type':'text/html', 'Content-length': Buffer.byteLength(data, 'utf8')
    });
    res.end(data);
    }
    catch(err) {
        res.statusCode = 404;
        res.end(`Error: ${err.message}`)
    }
}