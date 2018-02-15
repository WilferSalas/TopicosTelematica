// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt-nodejs');
//
// const userSchema = new mongoose.Schema({
//    local: {
//        email: String,
//        password: String
//    },
//    facebook: {
//        email: String,
//        password: String,
//        id: String,
//        token: String
//    },
//     google: {
//         email: String,
//         password: String,
//         id: String,
//         token: String
//     }
// });
//
// userSchema.methods.generateHash = function (password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };
//
// userSchema.methods.validatePassword = function (password) {
//     return bcrypt.compareSync(password, this.local.password);
// };
//
// module.exports = mongoose.model('User', userSchema);

const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const userSchema = new mongoose.Schema({
    local: {
        email: String,
        password: String
    },
    facebook: {
        id: String,
        token: String,
        email: String,
        password: String
    },
    twitter: {
        id: String,
        token: String,
        email: String,
        password: String
    },
    google: {
        id: String,
        token: String,
        email: String,
        password: String
    }
});

// generating a hash
userSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.local.password);
};

// create the model for user and expose it to our app
module.exports = mongoose.model('User', userSchema);
