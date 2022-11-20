const express = require("express");
const router = express.Router();
const chartController = require('../Controllers/chartController')

router.post('/saveChart',chartController.createChart)
router.get('/getCharts',chartController.getChart)


module.exports=router;