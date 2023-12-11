const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');
const models = require('../models/index');
const Users = models.user;
// 이것도 되는데 지금 이름을 Users라고 해놔서 안된다. 구조분해할당 쓸때는 이름을 동일하게 하자 .
// const {users} = require('../models/index');

const SECRET = 'sfjwklvnlkwnk'

function getIndex(req, res) {
    res.render('index');
}

function getSignup(req, res) {
    res.render('signup');
}

function getLogin(req, res) {
    res.render('Login');
}

async function signup(req, res, next) {
    try {
        const hashedPW = bcrypt.hashSync(req.body.pw, 12);
        const result = await Users.create({
            userId: req.body.userid,
            name: req.body.name,
            pw: hashedPW
        })
        res.redirect('/');

    }catch(err) {
        return next();
    }
}

async function login(req, res, next) {
    let result;
    console.log(req.body);
    try {
        // findOne의 경우 오류가 뜨는 것이 아니라 null값을 가져온다.
        result = await Users.findOne({
            where : { userId: req.body.userid}
        })
        console.log(result);
        if (!result || result =='') {
            res.send('아이디나 비밀번호가 틀립니다.');
        }
        
        const pwIsCorrect = bcrypt.compareSync(req.body.pw, result.pw);
        if (pwIsCorrect) {
            req.session.userid = result.userId;
            req.session.name = result.name;
            req.session.pw = result.pw;
            const token = jwt.sign({id: req.session.userid}, SECRET);
            req.session.token = token;
            res.send({
                userid: result.userId,
                name: result.name,
                pw: result.pw
            });
        }else {
            res.send('아이디나 비밀번호가 틀립니다.');
        }
    }catch(err) {
        console.log(err);
        return next(err);
    }
    
}

function getProfile(req, res) {
    res.render('profile', {
        data: {
            name: req.session.name,
            userid: req.session.userid,
            pw: req.session.pw
        }});
}

function get500(req, res) {
    res.render('500');
}

module.exports = {
    getIndex: getIndex,
    getSignup: getSignup,
    getLogin: getLogin,
    signup: signup,
    login: login,
    get500: get500,
    getProfile: getProfile
}