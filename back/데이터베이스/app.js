const express = require('express');
const app = express();

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

app.listen(8000);