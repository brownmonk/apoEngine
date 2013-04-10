var restify = require('restify');

function respond(req, res, next) {
  res.send('hello ' + req.params.name);
}

var server = restify.createServer();
server.pre(restify.pre.userAgentConnection());
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

function sendBand(req, res, next) {

    res.send("Hello");
    return next();
}

//server.post('/bands/:bandId', function create(req, res, next) {
//    res.send(201, Math.random().toString(36).substr(3, 8));
//    return next();
//});
//server.put('/hello', send);
server.get('/hello/:name', sendBand);
//server.head('/hello/:name', send);
//server.del('hello/:name', function rm(req, res, next) {
//    res.send(204);
//    return next();
//});

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});

/* use mongoose
var mongoose = require('mongoose/').Mongoose,
    db = mongoose.connect('mongodb://localhost/test'),
    Collection = mongoose.noSchema('test',db); // collection name

Collection.find({}).each(function(doc){
    // do something
});
*/