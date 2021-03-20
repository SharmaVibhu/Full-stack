var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: { type: String },
    age: { type: String },
    email: { type: String },
    mobile: { type: String },
})

module.exports = mongoose.model('User', UserSchema);