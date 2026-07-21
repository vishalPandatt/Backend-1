var express = require('express');
var router = express.Router();

const userModel = require('./users'); 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// GET route to demonstrate flash messages:


// router.get('/failed', function(req, res, next) {
//   req.flash('error', 'This is a failed message.');
//   res.send('Failed message set. Check the flash messages on the next request.');
//   // res.redirect('/');
// });

// router.get('/success', function(req, res, next) {
//   req.flash('success', 'This is a success message.');
//   // res.redirect('/');
//   console.log(req.flash('success')); // Log the flash message to the console
//   res.send('Success message set. Check the flash messages on the next request.');
// });

router.get('/Create',async function(req, res) {
  await userModel.create({
    username: 'JohnDoe',
    password: 'password123',
    description: 'A sample user',
    categories: ['node', 'react']
  });
  res.send('userdata');
});



module.exports = router;
