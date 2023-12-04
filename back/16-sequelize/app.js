const express = require('express');
const app = express();
const db = require('./models/index');


const router = require('./routes/index');
app.set('view engine', 'ejs');
// app.set('views', './views');
app.set('views', (__dirname + '/views'));
app.use( express.static('static'));
app.use(express.urlencoded( { extended: true}));
app.use(express.json());

app.use(router);

app.get('*', function(req, res) {
    res.status(404).render('404');
})

db.sequelize.sync({force: false}).then(function() {
    // force: false => 테이블이 없으면 생성. 
    // force: true => 테이블 무조건 생성 (만약 DB가 있다면 다 삭제하고 다시 생성 -> prod에서 사용)
    app.listen(8000);
})