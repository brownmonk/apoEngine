//Example. When run inserts one band object into the database named bandstock into a collection named bands.
// TODO: Command line to query for bands
// TODO: Delete example
// TODO: GUI for viewing data



var databaseUrl = "bandstockEX"; // "username:password@example.com/mydb"
var collections = ["bands"];
var db = require("mongojs").connect(databaseUrl, collections);

var band = {name: "Bandstock", email: "admin@bandstock.org", password: "1234pass"};
console.log('bands.save('+ band + ')');

db.bands.save(
    band,
    function(err, saved) {
        if( err || !saved ){
            console.log("Band not saved (err):");
            console.log(arguments);
        }
        else
            console.log("Band saved:");
            console.log(arguments);
    });


console.log('bands.find(): Searching for name:BandStock)');
db.bands.find(
    {name: "BandStock"},
    function(err, bands) {
        if(err){
            console.log('error querying for bands arguments:');
            console.log(arguments)
        }
        else if(bands.length == 0){
            console.log("No band found arguments:");
            console.log(arguments);
        }
        else {
            console.log("found:");
            console.log(arguments);
            bands.forEach( function(band) {
                console.log(band);
            });
        }
    });