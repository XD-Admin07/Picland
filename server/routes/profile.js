const express=require("express");
const router=express.Router();

const{
    updateDp,updateProfile,
}=require("../controllers/Profile");

const {auth,isUser,isContributor}=require("../middleware/auth");
//router for updatedp
router.post("/updatedp",auth,updateDp);

//router for updateprofile
router.post("/updateprofile",auth,updateProfile);

module.exports=router;