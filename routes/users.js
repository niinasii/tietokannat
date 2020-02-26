var express = require('express');
var router = express.Router();
var us = require('./usersService');

router.get('/', function (req, res, next) {
  us.getUsers(rows => {
    res.json(rows);
  });
});

router.get('/:id', function (req, res, next) {
  us.getUser(req.params.id, (rows) => {
    res.json(rows);
  })
});

router.post('/', function (req, res, next) {
  us.insertUser(req.body, (rowCount) => {
    if (rowCount > 0)
      res.status(201).json({ message: 'Inserted' });
    else {
      res.status(400).json({ message: 'Failed to insert' });
    }
  })
})

router.delete('/:id', function (req, res, next) {
  us.deleteUser(req.params.id, (rowCount) => {
    if (rowCount > 0)
      res.status(200).json({ message: 'Deleted' });
    else {
      res.status(400).json({ message: 'Failed to delete' });
    }
  })
})

router.put('/:id', function (req, res, next) {
  us.updateUser(req.body, req.params.id, (rowCount) => {
    if (rowCount > 0)
      res.status(200).json({ message: 'Updated' });
    else {
      res.status(400).json({ message: 'Failed to update' });
    }
  })
})

module.exports = router;