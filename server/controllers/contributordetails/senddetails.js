const Contributor =require("../../models/Contributor");


exports.senddetails=async(req,res)=>{
    
    try{
        const userid=req.userid;

     const details=await Contributor.findById(userid).populate("additionalDetails").exec();

     res.status(200).json({
        success:true,
        message:"Contributor details fetch successfully",
        data:details,
     })


    }catch(err)
    {
        res.status(401).json({
            success:false,
            message:err.message,
        })
    }
    


}