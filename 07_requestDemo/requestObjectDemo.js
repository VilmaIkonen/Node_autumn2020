'use strict';

const http = require('http');
// const url = require('url'); Here or in the function template string

const port = process.env.PORT ?? 3000;
const host = process.env.HOST ?? 'localhost';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-type': 'text/html' });
  res.write(`<!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <title>Request Object Demo</title>
        </head>
        </body>
            <h1>Request info</h1>
            <h2>headers: </h2>
            <pre>${JSON.stringify(req.headers, null, 4)}</pre> 
            <h2>host: ${req.headers.host}</h2>
            <h2>agent: ${req.headers['user-agent']}</h2>
            <h2>method: ${req.method}</h2>
            <h2>url: </h2>
            <pre>${req.url}</pre>
            <h2>pathname:${require('url').parse(req.url).pathname}</h2>
        </body>
    </html>`); //pathname, url, method will be mostly used // null and 4(intendation) are for prettifying JSON format
  res.end();
});

server.listen(port, host, () => console.log(`${host}: ${port}`));
