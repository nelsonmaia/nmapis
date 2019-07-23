var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/sms_gateway',function(req, res, next) {
  res.render('index', { title: req });
});

router.post('/sms_gateway',function(req, res, next) {

  console.log("SMS Gateway Body", req.body);
  console.log("SMS Gateway Body",req.headers);
  res.render('sms_gateway', { title: req.body.toString() });
});


module.exports = router;
