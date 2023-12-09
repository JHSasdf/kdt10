const express = require('express');
const jwt = require('jsonwebtoken');
const PORT = 8000;

const SECRET = '651s5v1w65gesv1w356h156ne48ev645w16gw54v';
const app = express();

const userInfo = { id: 'banana', pw:'1234', name: '홍길동', age: 26};

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get('/', function(req, res) {
    res.render('index');
});

app.post('/login', function(req, res) {
    try {
        const { id, pw } = req.body;
        const { id: realId, pw: realPw } = userInfo;

        if(id === realId && pw === realPw) {
            // 토큰 생성
            // jwt.sign(payload, secret Or PrivateKey, [optaions, callback])
            const token = jwt.sign({id: id}, SECRET);
            res.send({isLogin: true, token});
        } else {
            res.send({isLogin: false, msg: '로그인 정보가 올바르지 않습니다!'});
        }
    }catch (err) {
        console.error(err);
    }
})

app.post('/token', function(req, res) {

    console.log('token > ', req.headers.authorization);

    if(req.headers.authorization) {
        const authorization = req.headers.authorization.split(' ');
        console.log(authorization); // ['Bearer, 'token_string];
        const token = authorization[1];
        
        try {

            // 토큰 검증 : jwt.verify(token, secretkey)
            const result = jwt.verify(token, SECRET);
            console.log('result >', result)
    
            if(result.id === userInfo.id) {
                res.send({isVerify: true, name: userInfo.name});
            } else {
                res.send({isVerify: false, msg: '잘못된 접근입니다!'});
            }
        } catch (err) {
            console.log('verify err > ', err);
            res.send({ isVerify: false, msg: '인증된 회원이 아닙니다!'});
        }
    } else {
        res.redirect('/login');
    }
});

app.get('/login', function(req, res) {
    res.render('login');
});


app.listen(PORT, function() {
    console.log(`I am listening at ${PORT}`);
});