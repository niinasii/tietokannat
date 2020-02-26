var mc = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

mc.connect(url, function(error, db) {
  if (error) throw error;
  var dbo = db.db("harjoitus");
  dbo.collection("students").find({}, { projection: { _id: 0, nimi: 1, ika: 1 } }).toArray(function(error, result) {
    if (error) throw error;
    console.log(result);
    db.close();
  });
});