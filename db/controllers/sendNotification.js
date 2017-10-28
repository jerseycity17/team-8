const router = require('express').Router();
const Redirect = require('../middlewares/redirect');

router.get('/', Redirect.ifNotLoggedIn(), (req, res) => {
  res.render('sendNotification');
});

router.post('/admin/Broadcasts', (req, res) => {
	models.Broadcasts.create({
		type: req.body.type,
		description: req.body.description,
		region: req.body.region,
	})
	.then((broadcasts) => {
		res.json(broadcasts);
	})
	.catch(() => {
      console.log('error here')
      res.sendStatus(400);
    })
});

module.exports = router;
