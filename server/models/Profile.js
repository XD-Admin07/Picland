const mongoose=require("mongoose");
const { stringify } = require("querystring");

const userProfile=new mongoose.Schema(
    {
        firstname:{
            type:String,

        },
        lastname:{
            type:String,
        },

        mobile:{
            type:Number,
            trim:true,
        }
        ,gender:{
            type:String,
        }
    }
)
module.exports=mongoose.model("Profile",userProfile);