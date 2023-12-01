const express = require('express');
const router = express();
const controller = require('../controller/Cvisitor');

router.get('/', controller.main);

router.get('/visitor', controller.getVisitors);

router.post('/visitor', controller.post_visitor);

module.exports = router;