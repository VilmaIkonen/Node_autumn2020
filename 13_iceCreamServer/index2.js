// Changes in const {getAllFlavors}...

'use strict';

const http = require('http');
const url = require('url');
const path = require('path');

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

// Handles reading and sending files
const {read, send, sendJson, sendError, isIn} = require(path.join(__dirname, 'library', 'handler.js'));

const {getAllFlavors, hasFlavor, getIceCream} = require(path.join(__dirname, 'iceCreamStorage', 'iceCreamFreezer2.js'))(__dirname);

const resourceRoutes =['/favicon', '/styles/', '/js/', '/images/'] /* could be done with separate if else's but can now use isIn function */ 

const homePath = path.join(__dirname, 'home.html');


// ---- Function for creating the server ----- //

/* could be done with separate if else's but can now use isIn function */ 
const server = http.createServer(async(req, res) => {
    const route = decodeURIComponent(url.parse(req.url, true).pathname);
    try {
        if(route==='/'){
        const result = await read(homePath);
        send(res, result);
        }
        else if(isIn(route, ...resourceRoutes)) { /* ...resourceRoutes: check if one of the resourceRoutes starts with... */ 
            // console.log(route);
            // console.log(path.join(__dirname, route));
            const result = await read(path.join(__dirname, route));
            send(res, result);  /* upper part needed for getting data from other files: favicon, styles, js... */
        } 
        else if(route==='/all') {
            sendJson(res, await getAllFlavors());
            // const flavor = await getAllFlavors();
            // sendJson(res, flavors); can be done with two lines or as one liner
        } 
        else if(route.startsWith('/icecreams/')){ //--> route = '/icecreams/vanilla'
            const pathParts = route.split('/'); // will split on '/'
            // console.log(pathParts);
            if(pathParts.length > 2) {
                const iceCreamFlavor = pathParts[2];
                if(await hasFlavor(iceCreamFlavor)) {
                    const iceCream = await getIceCream(iceCreamFlavor);
                    sendJson(res, iceCream);
                }
                else {
                    sendError(res, 'Ice cream not found', 400);
                }
            }
        }
        else {
            sendError(res, 'Not found');
        }
    }
   
    catch(err) {
        sendError(res, err.message, 400);
    }
});

server.listen(port, host, () => console.log(`Server ${host}: ${port} running`))