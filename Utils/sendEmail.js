import nodemailer from 'nodemailer';
import 'dotenv/config'
import { generateOTP } from '../helper/otpGenerator.js';

const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
});

async function sendEmail(email) {
    const otp = generateOTP();
    const info = await transporter.sendMail({
        from: process.env.EMAIL,// sender address
        to: email, // list of receivers
        subject: "Hello ✔", // Subject line
        text: otp, // plain text body
    }).catch((err) => console.log(err));
}

export { sendEmail }