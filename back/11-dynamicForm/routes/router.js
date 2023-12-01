const express = require('express');
const router = express();
const controller = require('../controller/Cexercise');

router.get('/exercise2', controller.getExercise2);

router.post('/exercise2/login', controller.isValid);

module.exports = router;