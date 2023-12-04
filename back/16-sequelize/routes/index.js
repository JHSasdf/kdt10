const express = require('express');
const router = express();
const controller = require('../controller/Cvisitor');

router.get('/', controller.main);

router.get('/visitors', controller.getVisitors);

router.get('/visitor', controller.get_visitor);

router.post('/visitor', controller.post_visitor);

// 하나 수정
router.patch('/visitor', controller.patch_visitor);

router.delete('/visitor', controller.delete_visitor);
module.exports = router;