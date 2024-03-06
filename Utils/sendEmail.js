import nodemailer from 'nodemailer';
import 'dotenv/config'
import { generateOTP } from '../helper/otpGenerator.js';

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
});

function sendEmail(email) {
    const otp = generateOTP();
    return new Promise(async(resolve, reject) => {
        const info = await transporter.sendMail({
            from: process.env.EMAIL,
            to: email,
            subject: "WhatsApp Clone OTP",
            html: `<h1>OTP : ${otp}</h1>`
        }).catch((err) => {
            console.log(err);
            reject({
                status : 550
            });
        });
        resolve({
            status : 250,
            data : otp
        });
    })
}

export { sendEmail }