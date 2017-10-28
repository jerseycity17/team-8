const router = require('express').Router();
const Redirect = require('../middlewares/redirect');
const models = require('../models');

router.get('/', Redirect.ifNotLoggedIn(), (req, res) => {
  models.Users.findAll().then((allUsers) => {
    res.render('checkOnUsers' , {allUsers});
  });
});


module.exports = router;