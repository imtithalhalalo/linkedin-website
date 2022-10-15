const mongoose = require('mongoose');

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
    company_name: String
})

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;