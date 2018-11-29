const db = require('../models');
const Avatar = db.Avatar;

///////////////////////////////////////////////////
///////INDEX- get /api/avatars////////////////////////////

const index = (req, res) => {
    Avatar.find({})
        .populate('avatar')
        .exec((err, getAvatars) => {
            if (err) {
                console.log(err)
                return;
            }
            res.json(getAvatars);
        });
}

///////////////////////////////////////////////////
///////SHOW- get /api/avatars/:user_id///////////////////
const show = (req, res) => {
    let id = req.params.user_id;
    Avatar.find({user: id}, (err, getAvatar) => {
        if (err) {
            console.log(err);
            return;
        }
        res.json(getAvatar);
        });
    };


///////////////////////////////////////////////////
///////create, POST///////////////////
// const create = (req, res) => {
//     upload(req, res, (err) => {
//         if (err) throw err;
//             console.log("requested file here->", req.file); 
//             // create new profile image
//             let newAvatar = new db.Avatar({
//                 user: req.params.user_id,
//                 name: req.file.filename,
//                 mimetype: req.file.mimetype,
//             });
//             newAvatar.save();
//             res.json(newAvatar)
//         }
//     })
// }

module.exports = {
    index, show,
}