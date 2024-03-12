const express=require("express");
const {fetchImage } = require("../controllers/fetchImage/fetchImage");
const router=express.Router();



//roter fo fetching images
router.get("/fetchimages",fetchImage);

module.exports=router;