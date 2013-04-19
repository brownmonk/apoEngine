var logger = require('./logger.js').logger;
var mongoose = require('mongoose');
var cycle = require('../util/cycle.js');
logger.info('stocks/ipo2');

module.exports = function (app, db) {

    // user routes
    //var stock = require('../controllers/stock')



    app.get('/stocks/:stockId', function(req, res){
        var param = req.param('stockId');
        var body = {stockId:param};
        body = JSON.stringify(body);
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Content-Length', body.length);
        res.end(body);

    });
    logger.info('hit stocks/:stockId');
}

