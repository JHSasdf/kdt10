const express = require('express');
const app = express();
const PORT = 8000;
const db = require('./models/index');

app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// [라우터 분리]
const userRouter = require('./routes/user');
app.use('/user', userRouter); // localhost:PORT/user 기본 경로

// [404 error] 맨 마지막 라우트로 선언 -> 나머지 코드 무시되기 때문!!
app.get('*', (req, res) => {
    res.render('404');
});

db.sequelize.sync({force: false}).then(function() {
    // force: false => 테이블이 없으면 생성. 
    // force: true => 테이블 무조건 생성 (만약 DB가 있다면 다 삭제하고 다시 생성 -> prod에서 사용)
    app.listen(8000);
})