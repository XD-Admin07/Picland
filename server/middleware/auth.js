// Importing required modules
const jwt = require('jsonwebtoken');

//const dotenv = require("dotenv");
const User = require("../models/User");
const { jwtDecode } = require('jwt-decode');
const Contributor = require('../models/Contributor');
// Configuring dotenv to load environment variables from .env file
//dotenv.config();

// This function is used as middleware to authenticate user requests
exports.auth = async (req, res, next) => {
	try {
		const token =
			req.cookies.token ||
			req.body.token ||
			req.header("Authorization").replace("Bearer ", "");

		console.log("Token:", token);

		if (!token) {
			return res.status(401).json({ success: false, message: `Token Missing` });
		}

		try {
			//const decode = await jwt.verify(token, process.env.JWT_SECRET);
			const decode = await jwtDecode(token);
			const user = await User.findById(decode.id);

		if ((user?.Plan==="yearly" || user?.Plan==="monthly") && (user?.PlanDate && user?.PlanDate < new Date())) {
			// Subscription has expired
			await User.findByIdAndUpdate(
				decode.id,
				{
					Plan: false,
					$unset: { PlanDate: 1 } // Remove the PlanDate field
				},
				{ new: true }
			);
		}
			console.log("Decoded Token:", decode);
			req.user = decode;
		} catch (error) {
			console.error("Token Verification Error:", error);
			return res.status(401).json({ success: false, message: "Token is invalid" });
		}

		


		next();
	} catch (error) {
		console.error("Authentication Error:", error);
		return res.status(401).json({
			success: false,
			message: `Something went wrong while validating the token`,
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
		const userDetails = await Contributor.findOne({ email: req.user.email });

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


