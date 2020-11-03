'use strict';

const http = require('http');
const url = require('url');
// const {port, host} = require('./config.json');
const port = process.env.PORT || 3000;
const host = process.env.host || 'localhost';

// connecting the function "search" from persons.js
const {search} = require('./persons.js');

const server = http.createServer((req, res) => {
    const urlData = url.parse(req.url, true); //parsing the path/URL (ture: query parameters are needed)
    const value = urlData.query.value;
    const route = decodeURIComponent(urlData.pathname).toLowerCase(); //decode... checks ä, ö etc and changes them
    let result = [];
        
    if (route === '/persons') {
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
    res.writeHead(200, {'Content-type':'text/html'});
    res.end(createHtmlPage(result));

});

server.listen(port, host, () => console.log(`Listening ${host}: ${port}`))

function createHtmlPage(resultArray){
    let htmlPage = `<!DOCTYPE html>
    <html lang = "en">
    <head>
    <meta charset = "utf-8">
    <title>persons<title>
    </head>
    <body>
    <h1>Search result</h1>
    <table>
    <thead>
    <tr><th>First name</th><th>Last name</th><th>Age</></tr>
    </thead>
    <tbody>`;
    for(let person of resultArray){
        htmlPage += `<tr><td>${person.firstname}</td><td>${person.lastname}</td><td>${person.age}</td></tr>`
    };
    htmlPage+=`</tbody></table></html>`;
    return htmlPage;
}

// sendFile(res, homePath);

// const path = require('path');  tätä ei tarvita koska ...
// const fs = require ('fs');
// const homePath = path.join(__dirname, 'home.html');

// let result = [];



// server.listen(port, host, () => console.log(`Server running, ${host}: ${port}`));

// async function sendFile(res, filePath){
//     try {
//         const result = await fs.promises.readFile(filePath, 'utf8');

//     }
//     catch(err) {
//         res.statusCode=404;
//         res.end(`Error: ${err.message}`);
//     }
// }