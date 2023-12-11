const express = require('express');

const controller = require('../controller/controller');

const router = express();


router.get('/', controller.getIndex);

router.get('/signup', controller.getSignup);

router.get('/login', controller.getLogin);

router.post('/signup', controller.signup);

router.post('/login', controller.login);

router.get('/profile', controller.getProfile);

router.get('/500', controller.get500);

router.get('/401', controller.get401);

router.post('/logout', controller.logout);

router.delete('/destroy', controller.destroy);
module.exports = router;