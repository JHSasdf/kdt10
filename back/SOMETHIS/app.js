const express = require('express');
const app = express();

const router = require('./ROUTES/visitorRoutes');

app.set('view engine', 'ejs');
app.set('views', './views');

app.use( express.urlencoded( {extended: true}));
app.use( express.json());

app.use(router);

app.listen(3000);
