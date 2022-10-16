const User = require('../models/users.model');
const Job = require('../models/jobs.model');
const Applicant = require('../models/applicants.model');
const createJobPost = async (req, res)=>{
    Job.create(req.body)
    .then((job)=> {
        res.status(200).json({"message" : "created", "job":job})
    })
    .catch((err)=>res.status(400).send(err)) 
}

const getProfiles = async (req, res) => {
    const {job_id} = req.body;
    Applicant.find({job: job_id}).populate("user")
    .then((applicant)=> {
        res.status(200).json({"message" : "All Applicants", "applicant":applicant})
    })
    .catch((err)=>res.status(400).send(err)) 
}

module.exports = {
    createJobPost,
    getProfiles
}