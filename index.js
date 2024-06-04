const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const {foodFindByName} =  require('./controller/food.controller')
app.use(cors());
app.use(express.json());
const {contactUs} =  require('./controller/contactUs.controller')

mongoose.connect(process.env.DATABASE_URL)

app.get('/fooddata/:foodName',async (req,res)=>{
    console.log("hello")
    await foodFindByName(req,res)
})
app.post('/contactus',async (req,res)=>{
    console.log(req.body)
    await contactUs(req,res)
})
app.listen(process.env.PORT,()=>{
    console.log("server successfully run");
})