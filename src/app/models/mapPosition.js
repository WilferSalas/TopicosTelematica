'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mapsSchema = Schema({
    latitude: {type: Number},
    longitude: {type: Number},

});

module.exports = mongoose.model('maps', mapsSchema);