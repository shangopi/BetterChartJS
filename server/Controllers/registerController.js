const User =require("../Models/regUserModel")
const bcrypt = require('bcryptjs')

const registerUser =async (req,res)=>{
    console.log(req.body)
    try {
            const newPassword= await bcrypt.hash(req.body.password,10);
            await User.create({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email: req.body.email,
            password:newPassword,
            })
            res.json({status:'ok'});
            
    } catch (error) {
        res.json({status:'error',error:error});
    }   
}

module.exports={registerUser}