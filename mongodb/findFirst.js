var mc = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

mc.connect(url, function(error, db) {
  if (err) throw error;
  var dbo = db.db("harjoitus");
  dbo.collection("students").findOne({}, function(error, result) {
    if (error) throw error;
    console.log(result.nimi, result.ika);
    db.close();
  });
});