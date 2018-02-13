'use strict';

const User = require('../models/user');
const service = require('../service/index');

function singUp(req, res) {
    const user = new User({
        email: req.body.email,
        displayName: req.body.displayName,
        password: req.body.password
    });
    user.save((err) => {
        if(err) return res.status(500).send({ message: `Ha ocurrido un error al crear el usuario: ${err}`});

        return res.status(201).send({ token: service.createToken(user) });
    })
}

function singIn(req, res) {
    User.findOne({ email: req.body.email }, (err, user) => {
        if(err) return res.status(500).send({ message: `Error al iniciar sesion: ${err}`});

        if(!user) return res.status(404).send({ message: 'No existe el usuario' });

        req.user = user;
        res.status(200).send({ message: 'Te has logeado correctamente', token: service.createToken(user)})


        // if(user.length === 0) return res.status(404).send({ message: 'No existe el usuario' });
        // user.comparePassword(req.body.password, function (err, match) {
        //     if(err) return res.status(500).send({ message: err });
        //     if(match) {
        //         res.status(200).send({ message: 'Has iniciado sesion', token: service.createToken(user)})
        //     } else {
        //         res.status(401).send({ message: 'Datos incorrectos'})
        //     }
        // })
    })
}

module.exports = {
    singUp,
    singIn
};