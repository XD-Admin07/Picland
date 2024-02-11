const express = require("express");
const fileupload=require("express-fileupload");
const cookieParser=require("cookie-parser");
const cors=require("cors");
const database=require("./config/mongodb");
const cloudinary=require("./config/cloudinary");
const userRoutes=require("./routes/user");
const contributorRoutes=require("./routes/contributor");
const profileRoutes=require("./routes/profile");
const resetpassRoutes=require("./routes/resetPassword");
const app=express();
require('dotenv').config();
const PORT = process.env.PORT||4000;
app.use(express.json());
app.use(cookieParser());
database.connect();
cloudinary.cloudinaryConnect();
console.log("cloudinary connected successfully");
app.use(
	cors({
		//origin: "https://just-learn-frontend.vercel.app",
		origin: "http://localhost:3000",
		credentials: true,
	})
);
app.use(fileupload({
    useTempFiles : true,
    tempFileDir : '/tmp'
}));
//setting up routes
app.use("/api/v1/auth",userRoutes);
app.use("/api/v1/auth",contributorRoutes);
app.use("/api/v1/profile",profileRoutes);
app.use("/api/v1/changepassword",resetpassRoutes);
app.listen(PORT,()=>{
    console.log(`App is listening at ${PORT}`);
});