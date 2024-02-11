const mongoose=require('mongoose');

const contributorSchema=new mongoose.Schema(
    {
        email:{
            type:String,
            required:true,
            trim:true

        },
        password:{
            type:String,
            required:true,
            trim:true,
        },
        image:{
           type:String,
        },
        role:{
               type:String,
               default:"Contributor",
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
         
    },
    { timestamps: true }
)

module.exports=mongoose.model("contributor",contributorSchema);