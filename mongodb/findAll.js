var mc = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

mc.connect(url, function(error, db) {
  if (error) throw error;
  var dbo = db.db("harjoitus");
  dbo.collection("students").find({}).toArray(function(error, result) {
    if (error) throw error;
    console.log(result);
    db.close();
  });
});
