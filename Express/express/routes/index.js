var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/failed', function(req, res, next) {
  req.flash('error', 'This is a failed message.');
  res.send('Failed message set. Check the flash messages on the next request.');
  // res.redirect('/');
});

router.get('/success', function(req, res, next) {
  req.flash('success', 'This is a success message.');
  // res.redirect('/');
  console.log(req.flash('success')); // Log the flash message to the console
  res.send('Success message set. Check the flash messages on the next request.');
});

module.exports = router;
