const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');
// const timeZone = require('mongoose-timezone');
// const bcrypt = require('bcrypt');
// var jwt = require('jsonwebtoken');
// var secret = require('../config').secret;

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        lowercase: true, 
        unique: true,
        // match: [/\S+@\S+\.\S+/, 'is invalid'],
        index: true,
        required: [true, "Can't be blank"],
    },
    phone: {
        type: String,
        required: false
    },
    website: {
        type: String,
        required: false
    },
    username: {
        type: String,
        lowerCase: true,
        unique: true,
        required: [true, "Can't be blank"],
        // match: [/^[a-zA-Z0-9]+$/, 'isinvalid'], 
        index: true
    },
    password: {
        type: String,
        required: true
    },
    imgUrl: 
    {
        type: String,
        required: false
    },
    tour: [{
        type: Schema.Types.ObjectId,
        ref: 'Tour'
    }],
    plan: [{
        type: Schema.Types.ObjectId,
        ref: 'Plan'
    }], 
    dateAdded: 
    {
        type: Date,
        default: Date.now
    }
});

// {timestamps: true}

// UserSchema.methods.generateJWT = function() {
//     let today = new Date();
//     let exp = new Date(today.getDate() + 1);

//     return jwt_decode.sign({
//         id: this._id,
//         username: this.username,
//         exp: parseInt(exp.getTime() / 1000),
//     }, secret);
// };

// UserSchema.methods.toAuthJSON = function() {
//     return {
//         firstName: this.firstName,
//         lastName: this.lastName,
//         email: this.email,
//         website: this.website,
//         phone: this.phone,
//         imgUrl: this.imgUrl,
//         username: this.username,
//         token: this.generateJWT(),
//     };
// };

UserSchema.plugin(uniqueValidator, {message: 'is already taken.'});
// UserSchema.plugin(timeZone, {paths: ['date']});
// Schema.plugin(timeZone, {paths: ['date', 'subDocument.subDate']});
// mongoose.model('Schema', Schema);

const User = mongoose.model('User', UserSchema);
module.exports = User;