var connect = require("connect");
var mongoose = require('mongoose');
var winston = require('winston');

//Instantiate Winston logger and configure to write to log/server.log and console.
var logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({ filename: 'server.log' })
    ]
});

//Create a server listeningo n port 80
var server = connect()
    .use(connect.static("client"))
    .use(function (request, response) {
    response.statusCode = 403;

    logger.info("Responding with 403 end of the internet");
    response.end("You have reached the end of the Internet.");

    })
    .listen(80);

logger.log('info', '*** BANDSTOCK SERVER HAS STARTED ***');


//connect to the database
mongoose.connect('mongodb://localhost/bandstock');
var db = mongoose.connection;

db.on('error', function(){logger.error('database error' + arguments)});
db.once('open', function callback () {
    logger.log('info', 'database connection open');
});

var stockSchema = new Schema({
    bsid: String,
    owner: String,
    issuer: String,
    purchasePrice: 0,
    purchasePriceHistory: [0],
    originationDate: {type: Date, default: Date.now },
    meta: {
        favcodes: [{favcode: String}]
    }
});

//console.log('*** BANDSTOCK SERVER HAS STARTED ***');

