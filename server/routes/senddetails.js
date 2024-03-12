const express=require("express");
const router=express.Router();

const {senddetails}=require("../controllers/contributordetails/senddetails");


//create router for fetch contributor details

router.get("/contributordetails",senddetails);

module.exports=router;