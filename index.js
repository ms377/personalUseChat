const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const app=express();
// const userRoute=require("./Route/user");
const cors = require("cors");

//Connecting to database
mongoose.Promise = global.Promise;
// place your db here
mongoose.connect("mongodb://admin:123456@ds121535.mlab.com:21535/chatbe", { 'useMongoClient': true })
    .then(() => console.log("Connected to passwordbasic..."))
    
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.listen(3000,function(err){
    if(err){
        console.log("Error occured ");
    }
    else{
        console.log("basic password running running ");
    }
});