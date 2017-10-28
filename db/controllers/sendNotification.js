const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('sendNotification');
});

module.exports = router;
