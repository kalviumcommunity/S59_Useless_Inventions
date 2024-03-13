const express= require('express');
const mongoose=require('mongoose')
const cors=require('cors')
require("dotenv").config()
const app=express();
const port=8088;
const routes= require('./Routes.js')
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Hello")
});
app.listen(port,()=>{
    console.log(`app is running on port ${port}`)
});
app.get('/home',(req,res)=>{
    mongoose.connect(process.env.URI)
    .then(()=>{
        console.log("Connected mongodb")
    })
    .catch((err)=>{
        console.error(err);
    })
    const status=mongoose.connect ? "Connected":"Not-Connected"
    res.send(`connection status: ${status}`)
})

app.use(express.json())
app.use('/api',routes)