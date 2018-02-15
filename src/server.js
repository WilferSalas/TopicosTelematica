// 'use strict';
//
// const express = require('express');
// const app = module.exports = express();
//
// const path = require('path');
// const mongoose = require('mongoose');
// const passport = require('passport');
// const flash = require('connect-flash');
// const morgan = require('morgan');
// const cookieParser = require('cookie-parser');
// const bodyParser = require('body-parser');
// const session = require('express-session');
// const expressJade = require('express-jade');
//
// const { url } = require('./config/database');
//
// mongoose.connect(url);
//
// require('./config/passport')(passport);
//
//
// // settings
// app.set('port', process.env.PORT || 3000);
// app.set('view engine', expressJade);
//
// app.set('view engine', 'jade');
// //app.set('views', __dirname + '/views');
// app.set('views', path.join(__dirname, '/views'));
//
// app.use(express.static(__dirname + '/public'));
//
// //middlewares
// app.use(morgan('dev'));
// app.use(cookieParser());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(session({ secret: 'palabra ssecreta', resave: false, saveUninitialized: false }));
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(flash());
//
// // routes
// require('./app/routes')(app, passport);
//
// //static files
// app.use(express.static(path.join(__dirname, 'public')));
//
// app.listen(app.get('port'), () => {
//     console.log('server on port', app.get('port'))
// });

const express = require('express');
const app = express();

const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const jade = require('express-jade');


const { url } = require('./config/database.js');

mongoose.connect(url, {
    useMongoClient: true
});

require('./config/passport')(passport);

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// middlewares
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
// required for passport
app.use(session({
    secret: 'faztwebtutorialexample',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// routes
require('./app/routes.js')(app, passport);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// start the server
app.listen(app.get('port'), () => {
    console.log('server on port ', app.get('port'));
});
