const router = require('express').Router();
const models = require('../models');

router.get('/', (req, res) => {
  models.Users.findAll().then((users) => {
    res.json(users);
  });
});

router.get('/Broadcasts/:userId/:type', (req, res) => {
  if (req.params.type) {
    models.Users.findAll({where: {id: req.params.userId, task: req.params.type}}).then( (user) => {
      models.Broadcasts.findAll().then((broadcasts) => {
        res.json({found: broadcasts});
      });
    });
  } else {
    models.Users.findAll({where: {id: req.params.userId}}).then( (user) => {
      models.Broadcasts.findAll().then((broadcasts) => {
        res.json({found: broadcasts});
      });
    });
  };
});

router.post('/checkin', (req, res) => {
  models.Users.findOne({where: {id: req.body.userId}}).then((user) => {
    user.update({status: req.body.status});
  }).catch((err) => {
    console.log("error")
  })
  models.users_broadcasts.findOne({where: {UserId: req.body.userId, BroadcastId: req.body.broadcastId}}).then((row) => {
    row.update({status: req.body.status});
  }).catch((err) => {
    console.log("error")
  })
  res.sendStatus(200);
});

module.exports = router;
