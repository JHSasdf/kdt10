const express = require('express');
const router = express();
const controller = require('../controller/Cmain');

// router.get('/', controller.main);

// GET/players 전체 선수 조회
router.get('/players', controller.getPlayers);

module.exports = router;