const passport = require('../middlewares/authentication');
const router = require('express').Router();
const Redirect = require('../middlewares/redirect');
const models = require('../models');

router.get('/', Redirect.ifLoggedIn(), (req, res) => {
  res.render('login');
});


router.post('/', (req, res) => {
  passport.authenticate('local', {
    successRedirect: '/home',
    failureRedirect: '/login',
  })(req, res);
});

router.post('/mobile', (req, res) => {
  models.Users.findOne({where: {email: req.body.email}}).then((user) => {
    res.json({status: 'OK', id: user.id});
  })
});

module.exports = router;
