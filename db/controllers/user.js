const router = require('express').Router();
const models = require('../models');

router.get('/', (req, res) => {
  models.Users.findAll().then((users) => {
    res.json(users);
  });
});

router.get('/Broadcasts', (req, res) => {
  models.Users.findOne({where: {id: req.user_id}}).then( (user) => {
    models.Broadcasts.findAll().then((broadcasts) => {
      res.json(broadcasts);
    });
  });
});



module.exports = router;