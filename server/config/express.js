
/**
 * Module dependencies.
 */

var express = require('express');
var logger = require('winston');



module.exports = function (app, config) {

    var clientDir = config.root + '/client';
    app.use('/', express.static(clientDir));
    //app.set('views', clientDir + '/app/partials');

    logger.info(clientDir);

    //app.use(express.static(config.root + '/client'))
    app.use(express.logger('dev'));

    app.configure(function () {
        app.use(app.router)
    })
}
