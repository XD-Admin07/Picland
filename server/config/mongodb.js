const mongoose=require('mongoose');
require("dotenv").config();

exports.connect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        
    })
    .then(console.log(`DB connection Success`))
    .catch((err)=>{
        console.log(`DB Connection failure`);
        console.log(err);
        process.exit(1);
    });
}