const mongoose = require('mongoose');
const User = require('./users.model');

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: "title is required"
    },
    desc: {
        type: String,
        required: "description is required"
    },
    purpose: String,
    company_name: String,
    company_id: {type: mongoose.Types.ObjectId, ref: "User"}
})

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;