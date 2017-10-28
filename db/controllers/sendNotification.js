const router = require('express').Router();
const Redirect = require('../middlewares/redirect');

router.get('/', Redirect.ifNotLoggedIn(), (req, res) => {
  res.render('sendNotification');
});


module.exports = router;
