const express = require('express');
const app=express();

app.get('/api/get',(req,res)=>{
    res.send({message:"Node js AWS Deployment 2222"})
})

app.get('/api/inky',(req,res)=>{
    res.send({message:"Inky Pinky Ponky "})
})

app.get('/api/dildo',(req,res)=>{
    res.send({message:"Dildo Pagal hai - Dildo deewana hai "})
})

app.listen(9000,(req,res)=>console.log("Server running at 9000 port"))