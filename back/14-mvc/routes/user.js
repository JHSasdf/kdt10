const express = require('express');
const router = express();
const controller = require('../controller/Cuser');
// localhost:PORT/user => 기본경로
// app.js에서 line 25, app.use('/user', xxx);
// 그래서 get('/')는 get('user')가 된다.

router.get('/', controller.getUserInfo );

module.exports = router;