const mongoose = require('mongoose');

const applicantSchema = new mongoose.Schema({
    user: {type: mongoose.Types.ObjectId, ref: "User"},
    job: {type: mongoose.Types.ObjectId, ref: "Job"},
    email: String,
    phonenum: String
})

const Applicant = mongoose.model('Applicant', applicantSchema);

module.exports = Applicant;