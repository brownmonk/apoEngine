var logger = require('winston');

exports.defaultHandler = function(req, res, next, val){
    logger.info('Default Handler Arguments:');
    logger.info(req);
    logger.info(res);
    logger.info(next);
    logger.info(val);

    next();

}