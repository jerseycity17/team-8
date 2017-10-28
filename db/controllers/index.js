const router = require('express').Router();

router.use('/login', require('./login'));
router.use('/signup', require('./signup'));
router.use('/profile', require('./profile'));

router.use('/', require('./login'));
router.use('/home', require('./home'));
router.use('/home/sendNotification', require('./sendNotification'));
router.use('/home/checkOnUsers', require('./checkOnUsers'));
router.use('/user', require('./user'));
router.use('/admin', require('./admin'));

module.exports = router;
