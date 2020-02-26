var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("harjoitus");
  var myquery = { nimi: "Saara" };
  var newvalues = { $set: {nimi: "Sara", ika: 19 } };
  dbo.collection("students").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("Yksi dokumentti päivitetty");
    db.close();
  });
});