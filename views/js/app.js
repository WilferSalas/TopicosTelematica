'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const jade = require('express-jade');
const app = express();
const api = require('../../routes/index');
const path = require('path');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.set('view engine', 'jade');
app.use('/api', api);

app.use(express.static(path.join(__dirname, 'views')));

app.get('/login', (req, res) => {
    res.render('login')
});

// app.get('/login', function (req, res) {
//     res.render('login', { title: 'Hey', message: 'Hello there!'});
// });




module.exports = app;