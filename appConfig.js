/**
 * Here we store our configuration information. 
 * Configuration is the variables and values that we expect we will change between dev, test and production versions of our code
 * `hostname` for example is 127.0.0.1 in dev but might be something like code superdopeweb.com or mynewawesomesite.com, etc
 */
module.exports = {
    // `serverConfig` is a property of the `module.exports` object. It is a nested object.  `serverConfig` has several properties including `hostname`
    // for a local webserver running on our machine, available only to us, we use `127.0.0.1`. See more info at https://en.wikipedia.org/wiki/Localhost
    server: {
        hostname: '127.0.0.1',
        port: 3000
    },

    // define your home page to load in HTML
    homepage: {
        url: 'index.html'
    }
};
