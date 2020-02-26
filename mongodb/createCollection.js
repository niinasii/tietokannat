var mc = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

mc.connect(url, function(error, db) {
  if (err) throw error;
  var dbo = db.db("harjoitus");
  dbo.createCollection("students", function(error, res) {
    if (error) throw error;
    console.log("Kokoelma luotu!");
    db.close();
  });
});