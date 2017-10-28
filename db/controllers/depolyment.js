const router = require('express').Router();
const models = require('../models');

router.get('/', (req, res) => {
    res.render('depolyment');
});

router.post('/admin/Deployment', (req, res) => {
  models.Deployments.create({
    country: req.body.country,
    region: req.body.region,
  })
  .then((deployment) => {
    res.json(deployment)
  })
  .catch(() => {
    res.sendStatus(400);
  })
});



module.exports = router;