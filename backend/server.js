import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";


const app = express();
app.use(cors()); // allow frontend requests
app.use(bodyParser.json());

// Create the transporter for email
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail
    pass: process.env.EMAIL_PASS, // App password
  },
});

app.post("/contactus", async (req, res) => {
  const { name, email, message } = req.body;

try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER, // Receiver's email (your Gmail)
      subject: `New message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    });

    res.status(200).json({ message: "Message received and email sent!" });
  } catch (error) {
    // console.error("Email send error:", error);
    res.status(500).json({ message: "Failed to send email." });
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  // console.log(`Server running on port ${PORT}`);
});