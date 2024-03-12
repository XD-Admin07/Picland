const express=require("express");
const router=express.Router();

const{
    updateDp,updateProfile,getAllUserDetails
}=require("../controllers/Profile");

const {auth,isUser,isContributor}=require("../middleware/auth");
//router for updatedp
router.put("/updatedp",auth,updateDp);

//router for updateprofile
router.put("/updateprofile",auth,updateProfile);

//get user details
router.get("/getuserdetails",auth,getAllUserDetails)

module.exports=router;