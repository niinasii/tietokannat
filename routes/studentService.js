var mc = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
var url = 'mongodb://localhost:27017/harjoitus';

const getStudents = (callback) => {
    mc.connect(url, { useUnifiedTopology: true }, function(error, db) {
        if (error) throw error;
        var dbo = db.db("harjoitus");
        dbo.collection("students").find({}).toArray(function(error, result) {
          if (error) throw error;
          console.log(result);
          callback(result);
          db.close();
        });
      });
}

const getStudent = (id, callback) => {
    mc.connect(url, function(error, db) {
        if (error) throw error;
        var dbo = db.db("harjoitus");
        console.log(id);
        var query = {_id: new ObjectId(id) };
        dbo.collection("students").find(query).toArray(function(error, result) {
          if (error) throw error;
          console.log(result);
          callback(result);
          db.close();
        });
      });
}

const insertStudent = (newstudent, callback) => {
  const { nimi, ika } = newstudent;
    mc.connect(url, function(error, db) {
        if (error) throw error;
        var dbo = db.db("harjoitus");
        var student = { nimi: nimi, ika: ika };
        dbo.collection("students").insertOne(student, function(error, result) {
          if (error) throw error;
          console.dir(result);
          console.log("Yksi dokumentti lisätty");
          callback(result.insertedCount);
          db.close();
        });
      });
}

const deleteStudent = (id, callback) => {
  mc.connect(url, function(error, db) {
    if (error) throw error;
    var dbo = db.db("harjoitus");
    var myquery = {_id: new ObjectId(id) };
    dbo.collection("students").deleteOne(myquery, function(error, result) {
      if (error) throw error;
      console.dir(result);
      console.log("Yksi dokumentti poistettu");
      callback(result.deletedCount);
      db.close();
    });
  });
}

const updateStudent = (updatedstudent, id, callback) => {
  const { nimi, ika } = updatedstudent;
  mc.connect(url, function(error, db) {
    if (error) throw error;
    var dbo = db.db("harjoitus");
    var myquery = {_id: new ObjectId(id) }
    var newvalues = { $set: {nimi: nimi, ika: ika } };
    dbo.collection("students").updateOne(myquery, newvalues, function(error, result) {
      if (error) throw error;
      console.log("Yksi dokumentti päivitetty");
      callback(result.modifiedCount)
      db.close();
    });
  });
}

module.exports = { getStudents, getStudent, insertStudent, deleteStudent, updateStudent}

//const url = 'mongodb://$[username]:$[password]@$[hostlist]/$[database]?authSource=$[authSource]';