'use strict';

const mongoose = require('mongoose');
const app = require('./app');

const config = require('./config');

mongoose.connect(config.db, (err, res) => {
   if (err) throw  err;
    console.log('Conexion con la base de datos establecida');

    app.listen(config.port, () => {
        console.log(`Corriendo en http://localhost:${config.port}`)
    });
});
