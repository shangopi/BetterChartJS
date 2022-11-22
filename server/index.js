// const express = require("express");
const mongoose=require('mongoose')
// const app = express();
// const cors = require('cors');
// const { json } = require("express");
// const registerRouter = require('./Routers/registerRouter')
// const loginRouter=require('./Routers/loginRouter')
// const chartController =require('./Routers/chartRouter')
// app.use(cors())
// app.use(json())



var MongoDB = mongoose.connect('mongodb+srv://gopiadmin:gopigopi123@atlascluster.v3nwvkb.mongodb.net/ChartJs');



// app.use('/api/registerUser',registerRouter)
// app.use('/api/loginUser',loginRouter)
// app.use('/api/chart',chartController)

// app.get('/',(req,res)=>{
//     res.send("result");
// })
const app = require('./app')
//mongoose.connect('mongodb://localhost:27017/ChartJs')
const port = process.env.PORT || 4001;

app.listen(port,()=>console.log("Listening on port",{port},".."))
