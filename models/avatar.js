const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AvatarSchema = new Schema({
    // user: {
    //     type: Schema.Types.ObjectId,
    //     ref: "User"
    // },
    imgUrl: {
        type: String,
        default: '/uploads/default-avatar.jpg'
    }
});

const Avatar = mongoose.model('Avatar', AvatarSchema);
module.exports = Avatar;