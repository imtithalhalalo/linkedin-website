const express = require('express');
require('dotenv').config();
require('./config/db.config')
const app = express();
app.use(express.json());


let cors = require("cors");
app.use(cors());

const authRoutes = require('./routes/auth.route');
app.use('/auth', authRoutes)

const userRoutes = require('./routes/user.route');
app.use('/user', userRoutes);

const companyRoutes = require('./routes/company.route');
app.use('/companies', companyRoutes);

app.listen(process.env.PORT, (err)=>{
    if(err) throw err;
    console.log(`server running on port ${process.env.PORT}`);
})