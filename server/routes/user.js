const express=require("express");
const router=express.Router();

//Import the required controllers
const {
    login,signup,google
}=require("../controllers/Auth");


//Route for user login
router.post("/login",login)

//Route for google login
router.post("/google",google);
//Rute for user signup
router.post("/signup",signup)


module.exports=router;