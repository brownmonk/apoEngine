
module.exports = function (app) {

    // user routes
    var stock = require('../controllers/stock')

    app.get('/bands/:bandId', function(){return 'yo'});

}
