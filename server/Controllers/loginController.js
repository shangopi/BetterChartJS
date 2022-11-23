const User =require("../Models/regUserModel")
const bcrypt = require('bcryptjs')
const jwt =require('jsonwebtoken')

const loginUser=async (req,res)=>{
    let isPasswordValid;
    const user=await User.findOne({
        email: req.body.email,            //check whether a user exists for the email
    })
    if (user){
        isPasswordValid = await bcrypt.compare(req.body.password,user.password); //compare the passords
    }
    else{
        console.log("Fail");
        return res.json({status: 'error', user: false})
    }
    

    if(isPasswordValid){
        const token = jwt.sign({
            firstName: user.firstName,
            email:user.email,
        },'secret12345')  //////creates the token
        console.log('Success');
        return res.json({status:'ok',user:token});
       
    }
    else{
        console.log("Fail");
        return res.json({status: 'error', user: false})
    }

}

module.exports={loginUser}