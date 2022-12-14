const Job = require('../models/jobs.model');
const User = require('../models/users.model');
const Applicant = require('../models/applicants.model');
const Follow = require('../models/follows.model');
const fs = require('fs')
const editProfile = async (req, res) => {
    const { id, ...data } = req.body;
    User.findByIdAndUpdate(id, data).then(
        (user) => {
            res.status(200).json({ "message": "updated", "user": user })
        }
    )
        .catch((err) => res.status(400).send(err))
}

const getUser = async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json({ "user": user });
}

const getJobs = async (req, res) => {
    const job = Job.find().then(
        (job) => {
            res.status(200).json({ "message": "All Jobs", "job": job })
        }
    )
        .catch((err) => res.status(400).send(err))
}
const search = async (req, res) => {
    const data = await Job.find({
        "$or": [
            { title: { $regex: req.params.key } }
        ]
    }).then(
        (job) => {
            res.status(200).json({ "message": "Searched Jobs", "job": job })
        }
    )
        .catch((err) => res.status(400).send(err))
}

const apply = async (req, res) => {
    await Applicant.create(req.body)
    .then(
        (applicant) => {
            res.status(200).json({
                'message': "success",
                'user': applicant
            })
        }
    ).catch((err) => res.status(400).send(err))

}

const followCompany = async (req, res) => {
    await Follow.create(req.body)
    .then(
        (follow) => {
            res.status(200).json({
                'message': "success",
                'follow': follow
            })
        }
    ).catch((err) => res.status(400).send(err))
}

const unFollowCompany = async (req, res) => {
    await Follow.deleteOne(req.body)
    .then(
        () => {
            res.status(200).json({
                'message': "success"
            })
        }
    ).catch((err) => res.status(400).send(err))
}

const updateProfileImage = async (req, res) => {
    try{
        const { id } = req.body;
        let imagebase64 = req.body.image;
        let buff = Buffer.from(imagebase64, 'base64');
        const url = '../frontend/uploads/' + id + '.jpg';
        fs.writeFileSync('../frontend/uploads/' + id + '.jpg', buff);
        User.findByIdAndUpdate(id, { image: url }).then(
            (user) => {
                res.status(200).json({ "message": "updated", "user": user })
            }
        )
        .catch((err) => res.status(400).send(err.message))
        
        res.status(200).json({
            'message': "uploaded"
        })
    }catch (err) {
        res.status(400).send(err.message)
    }

    
}
module.exports = {
    editProfile,
    getUser,
    getJobs,
    search,
    apply,
    followCompany,
    unFollowCompany,
    updateProfileImage
}