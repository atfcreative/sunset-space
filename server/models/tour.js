const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TourSchema = new Schema({
    // tourStartTime: Date,
    // tourOperator: (some ref to an employee),
    // tourTaker: (ref to some user by ID),
});

const Tour = mongoose.model('Tour', TourSchema);
module.exports = Tour;