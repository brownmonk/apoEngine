var winston = require('winston');

module.exports.logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({ filename: 'server.log' })
    ]
});

module.exports.stopCircular = function(key, value) {
    var cache = [];
    if (typeof value === 'object' && value !== null) {
        if (cache.indexOf(value) !== -1) {
            // Circular reference found, discard key
            return;
        }
        // Store value in our collection
        cache.push(value);
    }
    cache = null;

    return value;
};