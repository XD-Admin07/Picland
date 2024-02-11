const express=require("express");
const router=express.Router();

const {resetPassword,resetPasswordToken}=require("../controllers/resetPassword");


router.post("/resettoken",resetPasswordToken);
router.post("/resetpassword",resetPassword);

module.exports=router;