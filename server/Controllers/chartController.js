const User=require('../Models/regUserModel')
const Chart=require('../Models/chartModel')

const getChart =async(req,res)=>{

}

const createChart = async(req,res)=>{
    const user=await User.findOne({
        email: req.body.email,
    })

    if(user){
        const chart =await Chart.model.create({
        title:req.body.title,
        chartType:req.body.chart,
        data: req.body.chartdataarray,
        })
        if(chart){
            user.charts.push(chart)
            user.save();
            res.json({status:'ok'});
        }
        else{
            res.json({status:'chart error'});
        }   
    }
    else{
        res.json({status:'User Error'})
    }
}

const deleteChart = async(req,res)=>{

}

module.exports={createChart,getChart,deleteChart}