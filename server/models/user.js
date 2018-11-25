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
    created_at: 
    {
        type: Date,
        default: Date.now
    },
    updated_at: 
    {
        type: Date,
        default: Date.now
    },
});

UserSchema.pre('save', next => {
    let now = new Date();
    this.updated_at = now;
    if (!this.created_at) {
        this.created_at = now;
    }
    next();
})

UserSchema.plugin(uniqueValidator, {message: 'is already taken.'});
// UserSchema.plugin(timeZone, {paths: ['date']});
// Schema.plugin(timeZone, {paths: ['date', 'subDocument.subDate']});
// mongoose.model('Schema', Schema);

const User = mongoose.model('User', UserSchema);
module.exports = User;