const mongoose=require('mongoose');

const userSchema=new mongoose.Schema(
    {
       username:{
        type:String,
       },
        email:{
            type:String,
            required:true,
            trim:true,
        },
        password:{
            type:String,
            required:true,
            trim:true,
        },
        Plan:{
            type:String,
            default:false,
        },
        image:{
           type:String,
        },
        role:{
               type:String,
               default:"User",
        },
        additionalDetails: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Profile",
          },
          token: {
            type: String,
          },
          resetPasswordExpires: {
            type: Date,
          },
         
    },{ strict: false },
    { timestamps: true }
)

module.exports=mongoose.model("user",userSchema);