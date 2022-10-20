const User = require('../models/users.model');
const Job = require('../models/jobs.model');
const Applicant = require('../models/applicants.model');
const notifier = require('node-notifier');
const createJobPost = async (req, res)=>{
    Job.create(req.body)
    .then((job)=> {
        res.status(200).json({"message" : "created", "job":job})
        notifier.notify({
            title: 'New Job',
            message: 'Check new job added!'
        });
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

const getJobs = async (req, res) => {
    const {company_id} = req.body;
    Job.find({company_id: company_id}).then(
        (job) => {
            res.status(200).json({ "message": "All Jobs", "job": job })
        }
    )
        .catch((err) => res.status(400).send(err))
}
const getCompanies = async (req, res) => {
    User.find({role: 'company'}).then (
        (company) => {
            res.status(200).json({ "message": "All Companies", "company": company })
        }
    ).catch((err) => res.status(400).send(err))
}
module.exports = {
    createJobPost,
    getProfiles,
    getJobs,
    getCompanies
}