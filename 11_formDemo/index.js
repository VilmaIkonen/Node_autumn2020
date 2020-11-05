'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');

// for form, this extra library needs to be imported
const qs = require('querystring'); 

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

const formPath = path.join(__dirname, 'form.html');

// Two paths for server: GET and POST
const server = http.createServer((req, res) => {
    if(req.method .toUpperCase() === 'GET'){
        fs.readFile(formPath, 'utf8', (err, data) => {
            if(err){
                res.statusCode=404;
                res.end(err.message);
            } else {
                res.writeHead(200, {'Content-type':'text/html', 'Content-Lenght': Buffer.byteLength(data, 'utf8')});
                res.end(data)
            }            
        });
        //POST getting data from the form. content type must be 'application/x-www-....
    } else if(req.method.toUpperCase() === 'POST'){
        if(req.headers['content-type']!='application/x-www-form-urlencoded'){
            res.statusCode=400;
            res.end('error');
        } else {
            const databuffer = [];
            // req.on method for listening requests
            req.on('data', (messageFragment) => databuffer.push(messageFragment));

            req.on('end', () => {
                let tempdata = qs.parse(Buffer.concat(databuffer).toString());
                res.writeHead(200, {'Content-Type':'application/json',
                }); 
                res.end(JSON.stringify(tempdata));
            }); 
            
            req.on('error', (err) => console.log('Error:' + err.message));         
          }
        }
})

server.listen(port, host, () => console.log(`Running ${host}: ${port}`));