const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'name is required'
    },
    email: {
        type: String,
        required: 'email is required',
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: 'password is required',
        select: false
    },
    location: {
        type: String
    },
    education: {
        type: String
    },
    experience: {
        type: String
    },
    image: {
        type: String,
        default: '../public/images/default.png'
    },
    role: String
})

const User = mongoose.model('User', userSchema);

module.exports = User;