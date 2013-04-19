var logger = require('./logger.js').logger;
var mongoose = require('mongoose');
var cycle = require('../util/cycle.js');
logger.info('stocks/ipo2');

module.exports = function (app, db) {

    // user routes
    //var stock = require('../controllers/stock')



    app.get('/stocks/:stockId', function(req, res){
        var stockId = req.param('stockId');
        var Stock = mongoose.model('Stock');

        Stock.find({ stockId:stockId  }, function(){
            logger.info(arguments);
            var body = {stockId:stockId};
            body = JSON.stringify(body);
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Content-Length', body.length);
            res.end(body);
        })


        logger.info('hit stocks/:stockId');
    });

}

