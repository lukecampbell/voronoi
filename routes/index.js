var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/barcharts/', function(req, res, next) {
  res.render('barcharts', { title: 'Bar Charts in d3'});
});

module.exports = router;
