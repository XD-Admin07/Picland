const express = require("express");
const fileupload=require("express-fileupload");
const cookieParser=require("cookie-parser");
const cors=require("cors");
const database=require("./config/mongodb");
const cloudinary=require("./config/cloudinary");
const userRoutes=require("./routes/user");
const contributorRoutes=require("./routes/contributor");
const profileRoutes=require("./routes/profile");
const imageRoutes =require("./routes/image")
const resetpassRoutes=require("./routes/resetPassword");
const senddetails =require("./routes/senddetails");
const payment =require("./routes/payment");
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
		
		// origin: "http://localhost:3000",
		origin:"https://picland.vercel.app",
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
app.use("/api/v1/auth",resetpassRoutes);
app.use("/api/v1/details",senddetails);
app.use("/api/v1/stock",imageRoutes);
app.use("/api/v1/payment",payment);
app.listen(PORT,()=>{
    console.log(`App is listening at ${PORT}`);
});