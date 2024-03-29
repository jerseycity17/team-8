const router = require('express').Router();
const models = require('../models');
var request = require('request');

// Set the headers
var headers = {
    'User-Agent':       'Super Agent/0.0.1',
    'Content-Type':     'application/x-www-form-urlencoded'
}

// Configure the request
var options = {
    url: 'http://localhost:5000',
    method: 'POST',
    headers: headers,
    form: {'key1': 'xxx', 'key2': 'yyy'}
}

router.get('/', (req, res) => {
  models.Users.findAll().then((users) => {
    res.json(users);
  }).catch((err) => {
    console.log(err)
  })
});

router.get('/Broadcasts', (req, res) => {
  models.Broadcasts.findAll().then((broadcasts) => {
    res.json(broadcasts);
  }).catch((err) => {
    console.log(err)
  })
});

router.get('/Broadcasts/view/:id', (req, res) => {
  models.users_broadcasts.findAll({where: {BroadcastId: req.params.id}}).then((row) => {
    res.json(rows);
  }).catch((err) => {
    console.log(err)
  })
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
        models.user_deployment.findAll({where: {DeploymentId: deployment.id}}).then((user_deployment_pair_list) => {
          user_deployment_pair_list.forEach((user_deployment_pair) => {
            if (user_deployment_pair) {
              console.log(user_deployment_pair)
              models.Users.findOne({where: {id: user_deployment_pair.UserId}}).then((user) => {
                 user.update({status: 'pending'});
                 models.users_broadcasts.create({
                   UserId: user.id,
                   BroadcastId: broadcast.id,
                   status: 'pending'
                 }).catch((err) => {
                   console.log(err)
                 })
                 var options = {
                     url: 'http://0.0.0.0:5000',
                     method: 'POST',
                     headers: headers,
                     form: {'To': "+1"+user.phone, 'Body': broadcast.description}
                 }

                 console.log(options)
                 request(options, function (error, response, body) {
                    if (!error && response.statusCode == 200) {
                      console.log(body)
                    }
                  })
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
    res.redirect('/sendNotification');
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

router.get('/Deployment', (req, res) => {
  models.Deployment.findAll().then((deployments) => {
    res.json(deployment);
  }).catch((err) => {
    console.log(err)
  })
});


module.exports = router;
