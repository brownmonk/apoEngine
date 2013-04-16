var winston = require('winston');
var logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({ filename: 'server.log' })
    ]
});

module.exports = {
    development: {
        root: require('path').normalize(__dirname + '/../..'),
        app: {
            name: 'Bandstock'
        },
        db: 'mongodb://localhost/bandstock'
    }
    , test: {

    }
    , production: {

    }
}

logger.info(module.exports.development);