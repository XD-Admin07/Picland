const express=require("express")
const router=express.Router();

const{capturePayment, verifyPayment}=require("../controllers/payments");
const {auth,isUser}=require("../middleware/auth");
//router setup
router.post("/capture-payment",auth,capturePayment);
router.post("/verify-payment",auth,verifyPayment);
module.exports=router;