const mongoose = require('mongoose');
const User = require('./users.model');

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    purpose: String,
    company_name: String,
    company_id: {type: mongoose.Types.ObjectId, ref: "User"}
})

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;