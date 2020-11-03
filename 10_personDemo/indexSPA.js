// Version for SPA Single page application
'use strict';

const http = require('http');
const url = require('url');
const fs = require ('fs').promises; // is needed for file transfer(?)
const path = require('path');

const port = process.env.PORT || 3000;
const host = process.env.host || 'localhost';

const homePath = path.join(__dirname, 'home.html');
const {search} = require('./persons.js');

const server = http.createServer((req, res) => {
    const urlData = url.parse(req.url, true); 
    const value = urlData.query.value;
    const route = decodeURIComponent(urlData.pathname).toLowerCase();
    if(route === '/'){
        sendFile(res, homePath) //uses default value for content-type.
        // sendFile(res, homePath, 'text/html')
    } 
    //adding routes for css and js files
    else if(route.startsWith('/styles/')){
        sendFile(res, path.join(__dirname, route), 'text/css');
    }
    else if(route.startsWith('/js/')){
        sendFile(res, path.join(__dirname, route), 'text/javascript');
    }
    else {
        let result = [];
            
        if(route === '/persons') {
            result = search();
        } 
        else if(route === '/persons/firstname'){
            result = search('firstname', value);
        }
        else if(route === '/persons/lastname'){
            result = search('lastname', value);
        } 
        else if(route === '/persons/age'){
            result = search('age', +value) // + changes string to a number. not necessary neede here as comparison is done with ==
        }
        else {
            result = {message: 'key not found'};
        }

        res.writeHead(200, {'Content-type':'application/JSON'});
        res.end(JSON.stringify(result));
    }
});

server.listen(port, host, () => console.log(`Listening ${host}: ${port}`))

async function sendFile(res, filePath, contentType='text/html'){ //contentType default value text/html, if not otherwise stated.
    try {
        const data = await fs.readFile(filePath, 'utf8');
        res.writeHead(200, {'Content-type':contentType,'Content-length': Buffer.byteLength(data, 'utf8')
    });
    res.end(data);

    }
    catch (err) {
        res.statusCode=404;
        res.end(`Error: ${err.message}`)

    }
}

