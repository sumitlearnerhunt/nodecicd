const express = require('express');
const app=express();

app.get('/api/get',(req,res)=>{
    res.send({message:"Node js AWS Deployment 2222"})
})

app.listen(9000,(req,res)=>console.log("Server running at 9000 port"))