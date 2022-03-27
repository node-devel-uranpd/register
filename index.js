const bodyparser=require('body-parser')
const exp=require('express')
const express=require('express-validator')
const exp1=exp()
const userschemaroute=require('./routes/userroute')
const mongoose=require('mongoose');
exp1.use(bodyparser.json())

mongoose.connect('mongodb://localhost:27017/crud',{UseNewUrlParser:true})

const dbcon=mongoose.connection
if(dbcon){
    res.send("dbconnectin successfully")
    }
exp1.post('/main',function(req,res){
   

res.send("running port succssfully")

       })


exp1.post('/api',userschemaroute)


exp1.listen(4000)
