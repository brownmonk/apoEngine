var express = require('express')();

var logger = require('winston');
var fs = require('fs')
var mongoose = require('mongoose')

// Load configurations
var env = process.env.NODE_ENV || 'development';
var config = require('./server/config/config.js')[env];

// Bootstrap db connection
mongoose.connect(config.db)

// Bootstrap models
var models_path = __dirname + '/server/models/'
fs.readdirSync(models_path).forEach(function (file) {
    require(models_path+'/'+file)
})

// express settings
require('./server/config/express.js')(express, config)

// Bootstrap routes
require('./server/config/routes.js')(express)

// Start the app by listening on <port>
var port = process.env.PORT || 3000
express.listen(port)
console.log('Express app started on port '+port)
