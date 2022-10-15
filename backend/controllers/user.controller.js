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

module.exports = {
    editProfile,
}