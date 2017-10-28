const router = require('express').Router();

router.use('/login', require('./login'));
router.use('/signup', require('./signup'));
router.use('/profile', require('./profile'));
router.use('/', require('./login'));

module.exports = router;
