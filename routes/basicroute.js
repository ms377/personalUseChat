const express=require("express");
const router=express.Router();

const checkpass = require('../controllers/passwordchecker');

router.post('/addUser',checkpass.newUser);
router.post('/validateUser',checkpass.checkUser);
module.exports=router;

