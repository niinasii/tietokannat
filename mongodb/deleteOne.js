var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("harjoitus");
  var myquery = { nimi: null };
  dbo.collection("students").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("Yksi dokumentti poistettu");
    db.close();
  });
});