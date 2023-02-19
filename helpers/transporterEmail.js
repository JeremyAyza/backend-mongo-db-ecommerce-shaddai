const nodemailer = require("nodemailer");
const { EMAIL_PASSWORD } = process.env;

// create reusable transporter object using the GMAIL SMTP transport
const transporter = nodemailer.createTransport({
	host: "smtp.gmail.com",
	port: 465,
	secure: true, // true for 465, false for other ports
	auth: {
		user: "shaddaiimporteirl@gmail.com", // email
		pass: EMAIL_PASSWORD, // application password
	},
});


transporter.verify()
	.then(() => {
		console.log("Listo para enviar email");
	})
	.catch(e => {
		console.log(e);
	});

module.exports = transporter;

