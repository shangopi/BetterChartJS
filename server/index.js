const mongoose=require('mongoose')



const app = require('./app')
app.get('/',(req,res)=>{
    res.send(process.env);
 })
mongoose.connect('mongodb+srv://gopiadmin:gopigopi123@atlascluster.v3nwvkb.mongodb.net/ChartJs')
const port = process.env.PORT || 4001;

app.listen(port,()=>console.log("Listening on port",{port},".."))
