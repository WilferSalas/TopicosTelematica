'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const jade = require('express-jade');
const app = express();
const api = require('./routes/index');
const path = require('path');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api', api);

module.exports = app;