const passport = require('../middlewares/authentication');
const router = require('express').Router();
const Redirect = require('../middlewares/redirect');

router.get('/', Redirect.ifLoggedIn(), (req, res) => {
  res.render('login');
});

router.post('/', (req, res) => {
  passport.authenticate('local', {
    successRedirect: '/home',
    failureRedirect: '/login',
  })(req, res);
});

module.exports = router;
