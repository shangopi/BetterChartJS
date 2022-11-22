const mongoose=require('mongoose')



const app = require('./app')

app.get('/',(req,res)=>{
    res.send(process.env);
 })

// try {
//     mongoose.connect('mongodb+srv://gopiadmin:gopigopi123@atlascluster.v3nwvkb.mongodb.net/ChartJs')   
// } catch (error) {
//    console.log("error in the connection",error) 
// }


const port = process.env.PORT || 4001;

app.listen(port,()=>console.log("Listening on port",{port},".."))
