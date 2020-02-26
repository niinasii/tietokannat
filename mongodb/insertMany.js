var mc = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

mc.connect(url, function(error, db) {
  if (error) throw error;
  var dbo = db.db("harjoitus");
  var student = [
    { nimi: 'John', ika: 14},
    { nimi: 'Peter', ika: 15},
    { nimi: 'Amy', ika: 22},
    { nimi: 'Hannah', ika: 11},
    { nimi: 'Michael', ika: 14},
    { nimi: 'Sandy', ika: 16},
    { nimi: 'Betty', ika: 18},
    { nimi: 'Richard', ika: 12},
    { nimi: 'Susan', ika: 13},
    { nimi: 'Vicky', ika: 13},
    { nimi: 'Ben', ika: 17}
  ];
  dbo.collection("students").insertMany(student, function(error, res) {
    if (error) throw error;
    console.log("Useita dokumentteja lisätty kokoelmaan: " + res.insertedCount);
    db.close();
  });
});