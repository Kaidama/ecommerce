const express = require('express');
const router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/signup', function(req, res, next) {
  res.render('auth/signup', { errors: [], });
});

router.post('/signup', (req, res) => {
  res.send('Got it!')//post works

})


module.exports = router;
