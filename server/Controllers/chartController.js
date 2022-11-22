const User=require('../Models/regUserModel')
const Chart=require('../Models/chartModel')
const jwt =require('jsonwebtoken')

const getChart =async(req,res)=>{
    const token = req.headers['x-access-token']
    
    try {
        const decoded = jwt.verify(token,'secret12345')
        const email=decoded.email;
        const user = await User.findOne({email:email})
        return res.json({status:'ok',user:user})

    } catch (error) {
        console.log(error)
        res.json({status:'error',error:'invalid token'})
        
    }
}

const createChart = async(req,res)=>{
    const user=await User.findOne({
        email: req.body.email,
    })

    if(user){
        try {
            const chart =await Chart.model.create({
                title:req.body.title,
                chartType:req.body.chart,
                data: req.body.chartdataarray,
            })
            user.charts.push(chart)
            user.save();
            res.json({status:'ok'});
        } catch (error) {
            res.json({status:'chart error'});
        }
    }
    else{
        res.json({status:'User Error'})
    }
}



module.exports={createChart,getChart,deleteChart}