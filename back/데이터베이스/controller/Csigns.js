const model = require('../model/signs');

function getExercise(req, res) {
    res.render('exercise');
}
function getSignup(req, res) {
    res.render('signup');
}

async function postSignup(req, res) {
    const result = await model.insertUser(req.body);
    res.redirect('/exercise');
}

function getLogin(req, res) {
    res.render('login', {result:''});
}

async function postLogin(req, res) {
    const result = await model.postLogin(req.body, res);
}

async function updateInfo(req, res) {
    console.log('req.body>', req.body)
    const result = await model.updateDb(req.body);
    res.send('업데이트 완료!');
    
}

async function deleteInfo(req, res) {
    const result = await model.deleteDB(req.body);
    res.send('삭제 완료!');
}

function getUpdate(req, res) {
    res.render('update');
}

module.exports = {
    getSignup: getSignup,
    getExercise: getExercise,
    postSignup: postSignup,
    getLogin: getLogin,
    postLogin: postLogin,
    updateInfo: updateInfo,
    getUpdate, getUpdate,
    deleteInfo, deleteInfo
}