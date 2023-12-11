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
            const token = jwt.sign({id: result.userId}, SECRET);
            req.session.token = token;
            // axios로 해당 값 보내주고 프론트에서 location.href로 profile로 감.
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

async function getProfile(req, res, next) {
    if (!res.locals.token) {
        return res.redirect('401');
    }
    try {
        const tokenId = jwt.verify(res.locals.token, SECRET).id;
        const existingId = await Users.findOne({
            where : {userid: tokenId}
        });
        if (existingId) {
            res.render('profile', {
                data: {
                    name: existingId.name,
                    userid: existingId.userId,
                    pw: existingId.pw,
                    id: existingId.id
                }});
                return;
        } else {
            return res.redirect('401');
        }
        // 위조토큰 방지
    }catch(err) {
        res.redirect('401');
    }
}

function logout(req, res) {
    req.session.token = '';

    res.redirect('/');
}

async function destroy(req, res) {
    console.log('sfsfs',req.body)
    await Users.destroy( { where: {id : req.body.id} });
    res.json( { result: '삭제완료'});
}

function get401(req, res) {
    res.render('401');
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
    getProfile: getProfile,
    logout: logout,
    get401: get401,
    destroy: destroy
}