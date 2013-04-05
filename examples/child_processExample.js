var cp = require('child_process');

exports.startMongo = function() {
    var start_mongo = '"' + './server/mongo/bin/mongod' + '" --dbpath="' + __dirname + '/mongo/data/db"';
    console.log(start_mongo);
    mongo = cp.exec(start_mongo, function (error, stdout, stderr) {
        console.log('mongo stdout: ' + stdout);
        console.log('mongo stderr: ' + stderr);
        if (error !== null) {
            console.log('exec error: ' + error);
        }
    });

    return mongo;

};