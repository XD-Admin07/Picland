const mongoose=require('mongoose');

const imageSchema=new mongoose.Schema(
    {
       name:{
        type:String,
        required:true,
       },
        category:{
            type:String,
           required:true,
           
        },
        studio:{
            type:String,
            //required:true,
            
        },
        
        image:{
           type:String,
        },
        contributor:{
            type:String,
           // required:true,
        }
       
         
    },
    { timestamps: true }
)

module.exports=mongoose.model("imagebar",imageSchema);