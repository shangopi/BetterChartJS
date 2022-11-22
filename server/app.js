const express = require("express");
const mongoose=require('mongoose')
const app = express();
const cors = require('cors');
const { json } = require("express");
const registerRouter = require('./Routers/registerRouter')
const loginRouter=require('./Routers/loginRouter')
const chartController =require('./Routers/chartRouter')
app.use(cors())
app.use(json())



app.use('/api/registerUser',registerRouter)
app.use('/api/loginUser',loginRouter)
app.use('/api/chart',chartController)
//mongoose.connect('mongodb://localhost:27017/ChartJs')

module.exports= app;