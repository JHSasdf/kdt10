const express = require('express');
const session = require('express-session');

const db = require('./models/index');
const router = require('./routes/routes');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(session({
    secret: 'mySessionSecretdeath',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000
    }
}))

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(router);

app.use('*', function(req, res) {
    res.redirect('/500');
})
db.sequelize.sync({force: false}).then(function() {
    app.listen(8000);
})
