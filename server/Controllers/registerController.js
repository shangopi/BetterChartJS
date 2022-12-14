const User =require("../Models/regUserModel")
const bcrypt = require('bcryptjs')

const registerUser =async (req,res)=>{
    
    try {
            const newPassword= await bcrypt.hash(req.body.password,10); //hash the password
            
            await User.create({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email: req.body.email,
            password:newPassword,
            })
            console.log(req.body)
            res.json({status:'ok'});
            
    } catch (error) {
        console.log("e",error)
        res.json({status:'error',error:error});
    }   
}

module.exports={registerUser}