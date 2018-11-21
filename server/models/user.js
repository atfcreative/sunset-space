const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const bcrypt = require('bcrypt');

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
        required: true
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
        required: true
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
    dateAdded: {
        type: Date,
        default: Date.now
    },
    tour: [{
        type: Schema.Types.ObjectId,
        ref: 'Tour'
    }],
    plan: [{
        type: Schema.Types.ObjectId,
        ref: 'Plan'
    }], 
});

const User = mongoose.model('User', UserSchema);
module.exports = User;