module.exports = (app, passport) => {

    app.get('/main', isLoggedIn, (req, res) => {
        res.render('main');
    });

    app.get('/project2', (req, res) => {
         res.render('soon');
     });

     app.get('/project3', (req, res) => {
         res.render('soon');
     });

    app.get('/about', isLoggedIn, (req, res) => {
         res.render('about');
     });

    app.get('/profile', isLoggedIn, (req, res) => {
        res.render('profile', {
            user: req.user
        });
    });

    //login view
    app.get('/', (req, res) => {
        res.render('login', {
            message: req.flash('loginMessage')
        });
    });

    app.post('/', passport.authenticate('local-login', {
        successRedirect: '/main',
        failureRedirect: '/',
        failureFlash: true
    }));

    app.get('/signup', (req, res) => {
        res.render('register', {
            message: req.flash('signupMessage')
        });
    });

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/main',
        failureRedirect: '/signup',
        failureFlash: true
    }));

    // logout
    app.get('/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });
};

function isLoggedIn (req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }

    res.redirect('/');
}


