const { mailer } = require("./index.js");
mailer({
  to: "prathambasnet963@gmail.com",
  subject: "For the Purpose of testing nodemailer application",
  message: "<h1>I hope this code will be successful....<h1>",
});
