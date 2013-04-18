var logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({ filename: 'server.log' })
    ]
});

logger.info('stocks/ipo2');

module.exports = function (app) {

    // user routes
    //var stock = require('../controllers/stock')

    app.get('/stocks/ipo', function(){return {'yo':'yoe'}});
    logger.info('stocks/ipo');

}
