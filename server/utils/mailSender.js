const nodemailer=require("nodemailer");

const mailSender = async(email,title,body)=>{
    try{
        let transporter=nodemailer.createTransport({
            host:process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS,
            },
            
            secure:false,
        })

        let info =await transporter.sendMail({
            from:`"Picland | RoughEdge"<${process.env.MAIL_USER}> `, //sender address
            to: `${email}`, //receivers mail
            subject:`${title}`, //subject line
            html: `${body}`, // html body
        })

        console.log(info.response);
        return info
    }catch(error){
        console.log(error.message);
        return error.message;
    }



}
module.exports=mailSender;