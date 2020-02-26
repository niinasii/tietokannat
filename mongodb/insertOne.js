var mc = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

mc.connect(url, function(error, db) {
  if (error) throw error;
  var dbo = db.db("harjoitus");
  var student = { nimi: "Emilia", ika: 22 };
  dbo.collection("students").insertOne(student, function(error, res) {
    if (error) throw error;
    console.log("Yksi dokumentti lisätty");
    db.close();
  });
});