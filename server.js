var connect = require("connect");
var server = connect()
    .use(connect.static("client"))
    .use(function (request, response) {
    response.statusCode = 403;
    response.end("You have reached the end of the Internet.");

    })
    .listen(80);
console.log('*** BANDSTOCK SERVER HAS STARTED ***');
