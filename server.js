const express = require("express");
const app =express();

const bodyParser=require("body-parser");
const { default: mongoose } = require("mongoose");

app.use(bodyParser.urlencoded({extended:true}));
app.get("/", function(req,res){
    res.send("express is working............!")

})




app.listen(3001,function(){
    console.log("Running...........");

})