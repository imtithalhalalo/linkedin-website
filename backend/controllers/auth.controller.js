const User = require('../models/users.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (req, res)=>{
    const {email, password} = req.body;
    
    const user = await User.findOne({email}).select("+password");
    
    if(!user) return res.status(404).json({message: "Invalid Credentials"});

    const isMatch = bcrypt.compare(password, user.password);
    if(!isMatch) return res.status(404).json({message: "Invalid Credentials"});

    const token = jwt.sign(
        {email: user.email, name: user.name}, 
        process.env.JWT_SECRET_KEY, 
        {expiresIn: '24h'}
        );
    res.status(200).json({
        'status':"success", 
        'user': user, 
        'token':token
    })
}

const signup = async (req, res)=>{
    const {name, email, password, role} = req.body;
    try{
        const user = new User();
        user.name = name;
        user.email = email;
        user.password = await bcrypt.hash(password, 10);
        user.role = role;
        
        await user.save();
        res.json(user)
    }catch(err){
        res.status(400).json({
            message: err.message
        })
    }
}

module.exports = {
    login,
    signup
}