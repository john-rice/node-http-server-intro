// we will access our configuration details as `appConfig` which has data that is an object with properties.
const appConfig = require('./appConfig.js');

module.exports = {
    // `serverConfig` is a property of the `module.exports` object.
    // `appConfig` is being assigned as the value. The value of `appConfig` is found in the `appConfig.js` file
    // It is a nested object.  `serverConfig` has several properties including `hostname`
    // for a local webserver running on our machine, available only to us, we use `127.0.0.1`. See more info at https://en.wikipedia.org/wiki/Localhost
    serverConfig: appConfig.server,
    /**
     * The `httpHandler`property is a function which can be called by other code
      */
    httpHandler: function(requestFromUser, ressponeToUser) {
        // setting status to `200` indicates a successful process had occured. See https://www.restapitutorial.com/httpstatuscodes.html
        ressponeToUser.statusCode = 200;
        // setting the Content-Type header lets the browse know about what content is being sent in repsonse
        // see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers and https://en.wikipedia.org/wiki/List_of_HTTP_header_fields
        ressponeToUser.setHeader('Content-Type', 'text/html');
        // write text that the user will see in their browser
        ressponeToUser.write('<h1>Hello Summer Cohort 2020</h1>');
        // after you browse to http://127.0.0.1:3000/ come back and change this text a few times while confirming the change in the browser each time
        // note: refresh your browser each time to see the changes you've made here
        ressponeToUser.write('<p>Test Change! Change this text a few times in VS Code to test your simple http server and nodemon out</p>');
        // required to end the request/response
        ressponeToUser.end();
    },
    /**
     * 'serverStartupHandler' is a prpoperty with a value that is a "function" and can be called by our other code
     */ 
    serverStartupHandler: function () {
        // `fullUrl` is being set using interpolation instead of concatenation. Note the backticks `` used instead of quotes.  See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
        const fullUrl = `http://${appConfig.server.hostname}:${appConfig.server.port}`;
        console.log(`Your http web server is running. Open your browser to ${fullUrl}`);
        console.log('If you have just made changes to your code and *saved* your changes, be sure to refresh your browser');
    }
};
