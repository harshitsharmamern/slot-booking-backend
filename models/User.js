const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        default: "user",
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
    }
})
const User = mongoose.model("user", UserSchema);
// User.createIndexes();
module.exports = User;

