const Job = require('../models/jobs.model');
const User = require('../models/users.model');

const editProfile = async (req, res)=>{
    const {id, ...data} = req.body;
    User.findByIdAndUpdate(id, data).then(
        (user) => {
            res.status(200).json({"message" : "updated", "user":user})
        }
    )
    .catch((err)=>res.status(400).send(err)) 
}

const getUser = async (req, res) => {
    const {id} = req.params;
    const user = await User.findById(id);
    res.status(200).json({"user":user});
}

const getJobs = async (req, res) => {
    const job = Job.find().then(
        (job) => {
            res.status(200).json({"message" : "All Jobs", "job":job})
        }
    )
    .catch((err)=>res.status(400).send(err)) 

}
module.exports = {
    editProfile,
    getUser,
    getJobs
}