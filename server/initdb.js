var connectionString = "bandstockEX"; // "username:password@example.com/mydb"
var collections = ["accounts"];
var mongojs = require('mongojs');
var db = mongojs(connectionString, collections);


var account = {
    person: {
        firstName: '',
        lastName: '',
        addresses:{
            address1: '',
            address2: '',
            zipcode: ''
        }
    },
    stocks: [
        {stockId: ''} // reference to Stock object
    ],
    verified: false,
    creationTime: new Date()
}

db.accounts.save(
    account,
    function(err, saved) {
        if( err || !saved ){
            console.log("Account not saved (err):");
            console.log(arguments);
        }
        else
            console.log("Account saved:");
        console.log(arguments);
    });