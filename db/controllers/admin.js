const router = require('express').Router();
const models = require('../models');

router.get('/', (req, res) => {
  models.Users.findAll().then((users) => {
    res.json(users);
  });
});

router.get('/Broadcasts', (req, res) => {
  models.Broadcasts.findAll().then((broadcasts) => {
    res.json(broadcasts);
  });
});

router.post('/Broadcasts', (req, res) => {
  models.Broadcasts.create({
    type: req.body.type,
    description: req.body.description,
    region: req.body.region,
  })
  .then((broadcast) => {
    // Later twilio should send text to the relevant users
    res.json(broadcast)
  })
  .catch(() => {
    res.sendStatus(400);
  })
});

router.post('/deployment', (req, res) => {
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

router.post('/deployment/assign', (req, res) => {
  models.user_deployment.create({
    DeploymentId: req.body.deploymentId,
    UserId: req.body.userId,
  })
  .then((deployment_user_pair) => {
    res.json(deployment_user_pair)
  })
  .catch(() => {
    res.sendStatus(400);
  })
});

module.exports = router;
