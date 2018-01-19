const mongoose=require('mongoose');
const details = new mongoose.Schema({
    email:{
        type:String,
        required: true,
        unique:true
    },
    password:{
        type:String,
        required: true
    },
    role:{
        type:String,
        required:true,
        default: 'student',
        enum: ['student', 'faculty', 'admin']
    }
})
module.exports = mongoose.model('data', details)
