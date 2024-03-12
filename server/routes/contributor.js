const express=require("express");
const router=express.Router();

const{
    Clogin,Csignup,
}=require("../controllers/Cauth");
const {auth,isUser,isContributor}=require("../middleware/auth");
const {
   Imagebar
}=require("../controllers/stockAdd/Imageadd");
//Csignup rote for Contributor registration

router.post("/csignup",Csignup);

//Clogin route for Contributor login
router.post("/clogin",Clogin);

//Image add route for contributor 
router.post("/imageadd",Imagebar);

module.exports=router;