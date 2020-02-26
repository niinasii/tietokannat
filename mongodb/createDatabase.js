var mc = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/harjoitus';
mc.connect(url, function (error, db) {
    if (error) {
        console.log("Virhe yhteyden avaamisessa"+ error.message);
    }
    console.log("Yhteys Mongon tietokantaan saatu");
    db.close()
});