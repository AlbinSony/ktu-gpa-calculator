var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


router.get('/calculateSGPA', function(req, res, next) {
  console.log("calculate");
  res.render('sgpa');
});


module.exports = router;
