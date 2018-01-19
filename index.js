const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const app=express();
// connecting to routes
const userRoute=require("./routes/basicroute");
// required for accecing this from different platforms VVIP
const cors = require("cors");

//Connecting to database
mongoose.Promise = global.Promise;
// place your db here
mongoose.connect("mongodb://admin:123456@ds263137.mlab.com:63137/basicpasswords", { 'useMongoClient': true })
    .then(() => console.log("Connected to passwordbasic..."))
    
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use("/",userRoute);
app.listen(3000,function(err){
    if(err){
        console.log("Error occured ");
    }
    else{
        console.log("basic password running ");
    }
});