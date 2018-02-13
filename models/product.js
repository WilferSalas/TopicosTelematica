'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = Schema({
    name: {type: String},
    picture: {type: String},
    price: { type: Number, default: 0},
    category: { type: String, enum: ['computers', 'phones', 'accesories']},
    description: {type: String}
});

module.exports = mongoose.model('Product', ProductSchema);

//Implementacion para los mapas

// const mapsRecordSchema = Schema({
//     name: String,
//     latitude: Number,
//     longitude: Number,
//     picture: String,
//     date: Date
// });
//
// module.exports = mongoose.model('Routes', mapsRecordSchema);