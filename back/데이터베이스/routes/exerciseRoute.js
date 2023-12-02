const express = require('express');
const router = express();
const controller = require('../controller/Csigns');
router.get('/exercise', controller.getExercise);

router.get('/signup', controller.getSignup);

router.post('/signup', controller.postSignup);

router.get('/login', controller.getLogin);

router.post('/login', controller.postLogin);

router.get('/update', controller.getUpdate);

router.patch('/update', controller.updateInfo);

router.delete('/update', controller.deleteInfo);
module.exports = router;