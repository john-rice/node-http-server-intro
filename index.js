/**
 *
 * Hello Summer Cohort!
 *
 *
 * On our local dev computer, in order to run the server that we have coded in this file we use `nodemon` so that with every change we make the server will restart without any extra effort from us in the terminal.
 *
 * Instructions:
 * In the terminal run `npm install` which will install all dependencies noted in `package.json`
 * Then run `npm run server` which wil execute the `server` script as configured in the `package.json` in the `script` properties
 *
 * - `nodemon` is specified as a `devDependency` in `package.json`
 * - `package.json` was created with `npm init -y`
 */

// `http` is available with `node` without any additonal install required. `http` allows developers to run a web server on the http protocol
// https://nodejs.org/api/http.html has info about `http` in node
// see another tutorial at https://www.w3schools.com/nodejs/nodejs_https.asp
// for general information about the http protocol, see https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview
const http = require('http');

// we will access our app code as a variable named `app` which has a data type that is an object with properties. Those properties include functions
const app = require('./app.js');

// `http` has a method named `createServer` which takes a `callback` function
// See more at https://www.w3schools.com/nodejs/met_http_createserver.asp
// The callback function will be executed every time a request is made to the server
//  code in the `http` module will send values to two parameters of the callback function which allow the callback to 
//  know about the rquest that was made by a user as well as to manage what the callback code will send back to the user.
// The "response" inforrmation that the callback sets will be seen by the user that made the request
const server = http.createServer(app.httpHandler);

// Have our server listen for "requests". See https://www.w3schools.com/nodejs/met_server_listen.asp
// We have three parameters here.the first is a number and the second is a string. The third is a "function", the "callback" function
// We use the callback here simply to put a message out to the console. Users don't see this message. It is only what we see on the "server-side"
server.listen(app.serverConfig.port, app.serverConfig.hostname, app.serverStartupHandler);