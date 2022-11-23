const mongoose = require('mongoose');

const Chart = new mongoose.Schema(
    {
        title : {type:String,required:true},
        chartType:{type:String,required:true},
        date:{type:Date,default:Date.now},
        data:{type:Array,required: true}
    }
)

const model = mongoose.model('UserCharts',Chart)
module.exports = {model,Chart}
