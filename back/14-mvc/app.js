const express = require('express');
const app = express();
const PORT = 8000;

const indexRouter = require('./routes/index'); // index는 생략 가능
const userRouter = require('./routes/user');

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//(임시) DB로부터 받아온 데이터


// [before] MVC 적용 전에는 app.js에서 라우트 정의
// 단점: 라우터(경로)들이 많아진다면? app.js코드가 길어짐 --> 유지 보수성 하락

// get
app.use('/', indexRouter); // localhost:PORT/ 경로를 기본으로 ./routes/index.js 파일에 선언한 대로 동작하겠다.
app.use('/user', userRouter); 


app.use('*', function(req, res) {
    res.render('404');
})


app.listen(PORT);