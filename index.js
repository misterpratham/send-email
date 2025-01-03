require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: process.env.SMTP_SERVICE ,
    auth :{
        user: process.env.SMTP_USER ,
        pass: process.env.SMTP_PASSWORD

    },
})
transporter.verify(function(error, sucess){
    if(error){
        console.log(error);
    }
    else{console.log("Service is ready to take our messages")}
});


const mailer = async ({to ,subject , message})=>
{const result = await transporter.sendMail(
    {from: `"Pratham Basnet🎃"<${process.env.SMTP_USER}>`,
    to  ,
    subject,
    html: message,
});
return result ;
};
module.exports = {mailer};
