const express = require('express');
const app=express();

app.get('/api/get',(req,res)=>{
    res.send({message:"Node js AWS Deployment 2222"})
})

app.get('/api/get2',(req,res)=>{
    res.send({message:"Inky Pinky Ponky"})
})

app.listen(9000,(req,res)=>console.log("Server running at 9000 port"))