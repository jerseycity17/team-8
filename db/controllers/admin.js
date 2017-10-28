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
    models.Deployments.findAll({where: {region: broadcast.region}}).then((deployments) => {
      deployments.forEach((deployment) => {
        console.log('hi', deployment.id)
        models.user_deployment.findAll({where: {DeploymentId: deployment.id}}).then((user_deployment_pair_list) => {
          user_deployment_pair_list.forEach((user_deployment_pair) => {
            if (user_deployment_pair) {
              console.log(user_deployment_pair)
              models.Users.findOne({where: {id: user_deployment_pair.UserId}}).then((user) => {
                 user.updateAttribute({status: 'pending'});
                 models.users_broadcasts.create({
                   userId: user.id,
                   broadcastId: broadcast.id,
                 });
              }).catch((err) => {
                console.log("error1")
              });
            }
          });
        }).catch((err) => {
          console.log("error2")
        });
      });

    });
    res.json(broadcast)
  })
  .catch(() => {
    res.sendStatus(400);
  })
});

router.post('/Deployment', (req, res) => {
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

router.post('/Deployment/assign', (req, res) => {
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
