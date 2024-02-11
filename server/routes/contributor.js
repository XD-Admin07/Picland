const express=require("express");
const router=express.Router();

const{
    Clogin,Csignup,
}=require("../controllers/Cauth");

//Csignup rote for Contributor registration

router.post("/csignup",Csignup);

//Clogin route for Contributor login
router.post("/clogin",Clogin);

module.exports=router;