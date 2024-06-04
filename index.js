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
const path = require('path');
mongoose.connect(process.env.DATABASE_URL)


// app.use(express.static(path.resolve(__dirname,process.env.PUBLIC_DIR)));

app.get('/pandey',async (req,res)=>{
    console.log("hello")
    res.send("suraj pandeu");
})


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