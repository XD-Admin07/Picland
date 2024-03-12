
const Imagebar = require("../../models/Imagebar");
const  Contributor= require("../../models/Contributor");
const {uploadImageToCloudinary} =require("../../utils/imageUploader");
exports.Imagebar=async(req,res)=>
{
    try{

        //Get user id
        const {userId} =req.body;
        //const userId=req.user.id;
        console.log(userId);
         //Get all required fields from request body
        const{name,category,studio}=req.body;
        const image=req.files.image;
        console.log("image data is..")
        console.log(image)
        console.log("remaining data is..")
        console.log(name,category,studio)

       // Check if any of the required fields are missing
        if(!name || !category ||! studio || !image || !userId){
            return res.status(400).json({
                success:false,
                message:"All Fields are Mandatory",
            })
        }

        const ContributorDetails = await Contributor.findById(userId,{
            accountType:"Contributor",
        })

        if(!ContributorDetails)
        {
            return res.status(400).json({
                success:false,
                message:"Contributor Details Not Found",
            })
        }

        //Upload the image to Cloudinary
        console.log(image,process.env.FOLDER_NAME);
        const simage=await uploadImageToCloudinary(image,process.env.FOLDER_NAME,1000,1000) 
  

        //create a new images entry with the given details
        const newImage = await Imagebar.create({
            name,image:simage.secure_url,category,studio,contributor:ContributorDetails,
        })
        console.log(simage.secure_url);
        console.log(newImage);

           // Return the new image and a success message
    res.status(200).json({
        success: true,
        data: newImage,
        message: "new image added Successfully",
      })





    }catch(err)
    {
     console.error(err);
     res.status(500).json({
        success: false,
        message: "Failed to add image",
        error: err.message,
      })
    }
   
}