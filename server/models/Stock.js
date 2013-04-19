var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StockSchema = new Schema({
    bsid: String,
    owner: String,
    issuer: String,
    purchasePrice: 0,
    purchasePriceHistory: [0],
    originationDate: {type: Date, default: Date.now },
    meta: {
        favcodes: [{code: String}]
    }
});

mongoose.model('Stock', StockSchema)