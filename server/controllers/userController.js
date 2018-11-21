const db = require('../models');
const User = db.User;
const bcrypt = require('mongoose');
const jwt = require('jsonwebtoken');

const index = (req, res) => {
    User.find({}, (err, users) => {
        if (err) res.send({ err: true, message: `Did not find any Users...`});
        res.json(users);
    });
};

const show = (req, res) => {
    const {id} = req.params;
    User.findById(id, (err, user) => {
        if(err) res.send({ err: true, message: `A user with ID:${id} does not exist.`});
        res.json(user);
    });
};

//Create new user on Sign Up, with default profile
const create = (req, res) => {
    User.findOne({username: req.body.username})
        .then(user => {
            if (user) {
                return res.status(400).json({ username:`Looks like that username is being used.` });
            }else{
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if (err) res.status(500).json({ error: err });
                let user = new User({
                    _id: new mongoose.Types.ObjectId(),
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    username: req.body.username,
                    password: hash,
                    email: req.body.email,
                    phone: req.body.phone,
                    website: req.body.website,
                    imgUrl: req.body.imgUrl,
                    tour: [],
                    plan: [],
                });
                user.save()
                    .then(result => {
                        console.log(result);
                        res.status(200).json({ success: `Successful user creation...`});
                    })
                    .catch(error => {
                        res.status(500).json({ error: err });
                }); 
            });
        }
    });
};

module.exports = {
    index, show, create
}