const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");
const User=require("../models/Contributor");
const NUser=require("../models/User");
const Profile=require("../models/Profile");

//Signup controllers for Registering Users
exports.Csignup = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
           return res.status(403).send({
                success: false,
                message: "All fields are required"
            }
            )
        }
        const nexistuser=await NUser.findOne({email});
        const existuser = await User.findOne({ email });
        if (existuser) {
            return res.status(400).json({
                success: false,
                message: "User already regisetered. Please sign in to continue",
            })
        }
        if (nexistuser) {
            return res.status(400).json({
                success: false,
                message: "Normal account already exist with this email. You can't create Contributor account with this",
            })
        }

        //Hash password
        const hashedpassword=await bcrypt.hash(password,10);

        //Create the additional profile for user
        const profileDetails = await Profile.create({
            firstname:null,
            lastname:null,
            mobile:null,

        })

        const user=await User.create({
            email,
            password:hashedpassword,
            additionalDetails:profileDetails._id,
            image:"",
        })
        return res.status(200).json({
            success:true,
            user,
            message:"User registered successfully",
        })



    }catch(error){
        console.error(error)
        return res.status(500).json({
            success:false,
            message:"User registration failure. Please try again after some time.",
        })
    }
  
}

//Login controllers for authenticating users

exports.Clogin=async(req,res)=>{
    try{
        //Get email and password from requies body
        const {email,password}=req.body

        //check if the email or password is missing

        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"Please Fill all the required input fields"
            })
        }

        //chech existing user
        const user=await User.findOne({email});
        

        if(!user)
        {
            return res.status(401).json({
                success:false,
                message:"User is not registered with us Please signup to continue"
            })
        }

        //Generate JWT token and compare password
       if(await bcrypt.compare(password,user.password)){
            const token=jwt.sign({
                email:user.email,id:user._id
            },
            process.env.JWT_SECRET,
            {
                expiresIn:"24",
            })

            //Set cookie for token and return success response
            const options={
                expires:new Date(Date.now()+3*24*60*60*1000),
                httpOnly:true,
            }
            res.cookie("token",token,options).status(200).json({
                success:true,
                token,
                user,
                message:"User login success",
            })
        }
        else{
            return res.status(401).json({
                success:false,
                message:"Password is incorrect",
            })
        }
    }catch(error){
        console.error(error)
            return res.status(500).json({
                success:false,
                message:"Login failure Please try again"
          })
        }
    
}