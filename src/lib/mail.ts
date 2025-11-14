import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "inf.2231@gmail.com",
    pass: process.env.GMAIL_APP_PASSWORD, // usa una contraseña de aplicación
  },
});
