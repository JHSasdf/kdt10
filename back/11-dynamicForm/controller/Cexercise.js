const userData = require('../database/userData');

function getExercise2 (req, res) {
    res.render('exercise2');
}

function isValid(req, res) {
    const userInfo = userData.getUserData();
    if (req.body.id === userInfo.id && req.body.pw === userInfo.pw) {
        res.send('로그인이 성공했습니다.');
    } else {
        res.status(400).send('로그인이 실패했습니다.');
    }

}

module.exports = {
    getExercise2,
    isValid
}