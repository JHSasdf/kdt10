const express = require('express');
const router = express();
const controller = require('../CONTROLLER/visitorController');
const db = require('../DATABASE/database');

router.get('/', controller.getVisitors);

module.exports = router;