const User = require('../models/users.model');
const Job = require('../models/jobs.model');
const createJobPost = async (req, res)=>{
    Job.create(req.body)
    .then((job)=> {
        res.status(200).json({"message" : "created", "job":job})
    })
    .catch((err)=>res.status(400).send(err)) 
}



module.exports = {
    createJobPost
}