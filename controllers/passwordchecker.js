const mongoose = require("mongoose");
const data = require('../models/basicstore');

module.exports = {

    async newUser(req,res){
        var user = new data(req.body);
        user.save()
        .then((data) => res.send(data.role))
        .catch((err)=>{res.send(err)})
    },

    async checkUser(req,res){
        data.find({email:req.body.email,password:req.body.password})
        .then((data) =>{
            res.send(data[0].role);
        })
        .catch((err) => res.send(err))
    }


}