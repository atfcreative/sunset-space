const db = require('../models');
const Avatar = db.Avatar;

const index = (req, res) => {
    Avatar.find({}, (err, avatars) => {
        if (err) res.send({ err: true, message: `Non-matchable plan, shoots bruh...`});
        res.json(avatars);
    });
};

const show = (req, res) => {
    const {id} = req.params;
    Avatar.findById(id, (err, avatar) => {
        if (err) res.send({ err: true, message: `Wait?! There is no plan with ID:${id}....` });
        res.json(avatar);
    });
};

const create = (req, res) => {
    Avatar.create(req.body, (err, newAvatar) => {
        if (err) res.send({ err: true, message: `mmmrrrppkkk errrror, does not compute...` });
        res.json(newAvatar);
    });
};

const update = (req,res) => {
    Avatar.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedAvatar) => {
        if (err) res.send({ err: true, message: `Meeerrrpppp, Cannot update the user...`});
        res.json(updatedAvatar);
    });
};

const destroy = (req, res) => {
    Avatar.findByIdAndDelete(req.params.id, (err, deletedAvatar) => {
        if (err) res.send({ err: true, message: `Meeerrrpppp, Cannot delete the user...`});
        res.json({ error: false, message: `Righteous, User deleted to the max...`});
    });
};


module.exports = {
    index, show, create, update, destroy
}