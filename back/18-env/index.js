// const ps = process.env;
// console.log(ps);

const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT;

app.get('/', function(req, res) {
    console.log(process.env.NAME);
    console.log(process.env.NODE_ENV);
    console.log(process.env.KKK);
    console.log(process.env.JJJ);
    res.send('HELLO WORLD!');
})

app.listen(PORT);