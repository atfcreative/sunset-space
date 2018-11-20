const mongoose = require('mongoose');
const port = 27017;
const url = `mongodb://localhost:${port}/sunset`;

mongoose.connect(url, { useNewUrlParser: true })
.then(() => console.log(`MongoDB connection working at port ${port}...`))
.catch(err => console.log(err));

module.exports = {
    Plan: require('./plan'),
    Tour: require('./tour'),
    User: require('./user'),
}