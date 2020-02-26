var express = require('express');
var router = express.Router();
var ss = require('./studentService');

router.get('/', function (req, res, next) {
    ss.getStudents(result => {
      res.json(result);
    });
  });

  router.get('/:id', function (req, res, next) {
    ss.getStudent(req.params.id, (result) => {
      res.json(result);
    })
  });

  router.post('/', function (req, res, next) {
    ss.insertStudent(req.body, (rowCount) => {
      if (rowCount > 0)
        res.status(201).json({ message: 'Inserted' });
      else {
        res.status(400).json({ message: 'Failed to insert' });
      }
    })
  })

  router.delete('/:id', function (req, res, next) {
    ss.deleteStudent(req.params.id, (rowCount) => {
      if (rowCount > 0)
        res.status(200).json({ message: 'Deleted' });
      else {
        res.status(400).json({ message: 'Failed to delete' });
      }
    })
  })

  router.put('/:id', function (req, res, next) {
    ss.updateStudent(req.body, req.params.id, (rowCount) => {
      if (rowCount > 0)
        res.status(200).json({ message: 'Updated' });
      else {
        res.status(400).json({ message: 'Failed to update' });
      }
    })
  })

  module.exports = router;