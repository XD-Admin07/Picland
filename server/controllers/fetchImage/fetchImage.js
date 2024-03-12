
const Imagebar =require('../../models/Imagebar')
exports.fetchImage=async(req,res)=> {
  try{
    //fetch images from Database
    const images =await Imagebar.find();
    res.json(images);
  }catch(err){
     console.error(err);
     res.status(500).json({message:"Server Error"})
  }
}
