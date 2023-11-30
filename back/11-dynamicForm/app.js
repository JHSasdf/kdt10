const express = require('express');
const app = express();
const PORT = 8000;


app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', function(req, res) {
    res.render('index');
})

app.get('/ajax', (req, res) => {
    console.log(req.query);
    res.send(req.query);
})

app.post('/ajax', (req, res) => {
    console.log(req.body);
    res.send(req.body);
})

app.get('/axios', function(req, res) {
    console.log(req.query);
    if (!req.query || !req.query.name || !req.query.gender) {
        return res.status(400).send('에러 발생!!!! 둘 다 기입하세요!');
    }
    res.send(req.query);
})

app.post('/axios', function(req, res) {
    if (req.body.name && req.body.gender){
        return res.send(req.body);
    }
    // res.send(req.body);
    res.status(400).send('에러 발생! 둘 다 기입하세욧!')
})

app.get('/fetch', function(req, res) {
    console.log(req.query);
    res.send(req.query);
})

app.post('/fetch', function(req, res) {
    console.log(req.body);
    res.send(req.body);
})

app.get('/exercise1', function(req, res) {
    res.render('exercise1');
})

app.get('/exercise1/axios', function(req, res) {
    res.send(req.query);
})

const router = require('./routes/router');
app.use(router);

app.listen(PORT);