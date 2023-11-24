const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

// body parser 미들웨어 등록
app.use(express.urlencoded({extended: true})) // post요청으로 들어오는 url 형식의 데이터의 파싱 (확장 허용)
app.use(express.json()) // json 형식으로 들어온 데이터도 파싱하겠다.

app.get('/', (req, res) => {
    res.render('index');
});

// get 방식은 클라이언트에서 보낸 데이터가 req.query에 저장
app.get('/login', function(req, res) {
    // console.log(req.query);
    res.render('result', {title: 'Get 요청', userInfo: req.query});
});

app.post('/login', function(req, res) {
    // console.log(req.body);
    // res.send(`post 요청 성공! ${req.body.pw}`);
    res.render('result', {title: 'POST요청', userInfo: req.body})
})

app.post('/js-form-check', function(req,res) {
    console.log(req.body);
    res.send('js validation 성공')
})

app.get('/exercise1', function(req,res) {
    res.render('exercise1');
})

app.get('/exercise1/signUp', function(req, res) {
    res.send(`${req.query.name}, ${req.query.sex}, ${req.query.year}, ${req.query.month}, ${req.query.day}, ${req.query.hobby}`)

})

app.get('/exercise2', function(req, res) {
    res.render('exercise2');
})

app.post('/exercise2/signup', function(req, res) {
    // res.send(`${req.body.name}, ${req.body.sex}, ${req.body.year}, ${req.body.month}, ${req.body.day}, ${req.body.range} ${req.body.email}`)
    let arr = [];
    for (key in req.body) {
        console.log(req.body[key]);
        arr.push(req.body[key]);
    }
    res.send(req.body)
    console.log(typeof req.body);
})
app.get('/background', function(req, res) {
    res.render('background', {color: 'white'});
})

app.post('/background', function(req, res) {
    const color = req.body.input;
    console.log(req.body);
    res.render('background', {color : color})
})
app.listen(PORT);