const jwt=require("jsonwebtoken");
const User=require("../models/User");

exports.auth =async (req,res,next)=>{
    try{
        const token=req.cookies.token||
        req.body.token ||
        req.header("Authorization").replace("Bearer","");

        if(!token){
            return res.status(401).json({
                success:false,
                message:`Token Missing`
            })
        }

        try{
            //verifying the JWT using the secret key stroed in environment variables
            const decode=await jwt.verify(token,process.env.JWT_SECRET);
            console.log(decode);
            //Storing the decoded JWT payload in the request object for further use
            req.user=decode;
        }catch(error){
            return res.status(401).json({success:false,message:"token is invalid"});

        }
        // If JWT is valid, move on to the next middleware or request handler
        next();
    }catch (error) {
		// If there is an error during the authentication process, return 401 Unauthorized response
		return res.status(401).json({
			success: false,
			message: `Something Went Wrong While Validating the Token`,
		});
	}
};

exports.isUser = async (req, res, next) => {
	try {
		const userDetails = await User.findOne({ email: req.user.email });

		if (userDetails.accountType !== "User") {
			return res.status(401).json({
				success: false,
				message: "This is a Protected Route for User",
			});
		}
		next();
	} catch (error) {
		return res
			.status(500)
			.json({ success: false, message: `User Role Can't be Verified` });
	}
};

exports.isContributor = async (req, res, next) => {
	try {
		const userDetails = await User.findOne({ email: req.user.email });

		if (userDetails.accountType !== "Contributor") {
			return res.status(401).json({
				success: false,
				message: "This is a Protected Route for Contributor",
			});
		}
		next();
	} catch (error) {
		return res
			.status(500)
			.json({ success: false, message: `User Role Can't be Verified` });
	}
};