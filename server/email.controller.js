var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
   host: process.env.EMAILHOST,
   port: process.env.EMAILPORT,
   secure: process.env.EMAILSECURE,
   auth: {
      user: process.env.EMAILSUPPORT,
      pass: process.env.EMAILPASS,
   },
});

function getMailOptions(req) {
   return {
      from: process.env.EMAILSUPPORT,
      to: process.env.EMAIL_RECIEVERS,
      subject: "IoanaCatalina Freelance. " + req.body.subject,
      text:
         req.body.message +
         "\n\n Sender's name: " +
         req.body.name +
         "\n\n Reply to this email: " +
         req.body.email,
   };
}

module.exports = {
   async sendEmail(req, res) {
      var mailOptions = getMailOptions(req);
      console.log("Got this email options " + JSON.stringify(mailOptions));
      transporter.sendMail(mailOptions, function (error, info) {
         if (error) {
            console.log("Error sending the email:" + error);
            res.status(500).json({ message: "error" });
         } else {
            console.log("Email sent: " + info.response);
            res.status(200).json({ message: "Message was sent!" });
         }
      });
   },
};
