const express=require("express");
const router=express.Router();

const {resetPassword,resetPasswordToken}=require("../controllers/resetPassword");


router.post("/reset-password-token",resetPasswordToken);
router.post("/reset-password",resetPassword);

module.exports=router;