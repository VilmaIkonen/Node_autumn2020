// will be used for READING and SENDING files

'use strict';

const fs = require('fs');
const path = require('path');

const MIMETYPES = require('./mimetypes.json');

// ----- File READING function ----- //

const read = filepath => {
    const extension = path.extname(filepath).toLowerCase();
    /* extension = file extension eg .png */
    const mime = MIMETYPES[extension] || {type:"application/octet-stream", encoding: "binary"}; /* for files of unknown type: "application/octet-stream" "binary" */
   
    return fs.promises.readFile(filepath, mime.encoding)  /* encoding coming from mime, from mimetypes.json */
        .then(fileData => ({fileData, mime}))
        .catch(err => err);
}

// ----- File SENDING function ----- //

const send =(res, resource) => { /* resource: can be images, text etc. JSON will handled separately */
    res.writeHead(200,{'Content-type':resource.mime.type,'Content-length': Buffer.byteLength(resource.fileData, resource.mime.encoding) }); /* content type and length will be read from mimetypes.json */
    res.end(resource.fileData, resource.mime.encoding);
}

const sendJson = (res, jsonResource) => {
    const jsonData = JSON.stringify(jsonResource)
    res.writeHead(200, {'Content-type':'application/json'});
    res.end(jsonData);
}

// ----- error SENDING function ----- //

const sendError = (res, message, code = 404) => {
    res.writeHead(code, {'Content-type': 'Application/json'}) /* error message will be in JSON format */ 
    res.end(JSON.stringify({message}));
}

// ----- helper function for checking if something is there or not ----- //

const isIn = (route, ...routes) => {
    for(let start of routes) {
        if(route.startsWith(start))
        return true;
    } 
    return false;
}

// exports needed so file can be read elsewhere
module.exports = {read, send, sendJson, sendError, isIn};