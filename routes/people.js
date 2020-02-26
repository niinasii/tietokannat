var express = require('express');
var router = express.Router();
var ps = require('./peopleService');

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.json(ps.getPeople());
});

router.get('/:id', function(req, res, next) {
    //res.send('respond with a resource');
    res.json(ps.getPerson(req.params.id)); //palauttaa jsonin muotoisen vastauksen ps moduulin ja getPeople funktion kautta
  });

router.post('/', function(req, res, next) {
    res.status(201).send(ps.addPerson(req.body));
});

router.delete('/:id', function(req, res, next) {
    res.send(ps.deletePerson(req.params.id));
});

router.put('/:id', function(req, res, next) {
    res.send(ps.updatePerson(req.params.id)); //Kesken
});

module.exports = router;
