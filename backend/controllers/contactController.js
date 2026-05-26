const Contact = require("../models/Contact");
const nodemailer = require("nodemailer");

const submitContact = async (req, res) => {
  const { name, email, phone, address, desiredCountry, visaType, message } =
    req.body;

  try {
    // 1. Save to MongoDB
    const newContact = new Contact({
      name,
      email,
      phone,
      address,
      desiredCountry,
      visaType,
      message,
    });
    await newContact.save();
    console.log("✅ Contact saved to MongoDB");

    // 2. Send response IMMEDIATELY (don't wait for email)
    res.status(200).json({
      success: true,
      message:
        "Your message has been received! We will get back to you within 24 hours.",
    });

    // 3. Send email AFTER response (fire-and-forget)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    transporter
      .sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `📩 New Consultation Request from ${name}`,
        html: `
          <h2 style="color:#f59e0b">New Contact Form Submission — Orvanta Advisory</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Address:</strong> ${address || "Not provided"}</p>
          <p><strong>Desired Country:</strong> ${desiredCountry}</p>
          <p><strong>Visa Type:</strong> ${visaType}</p>
          <p><strong>Message:</strong> ${message || "No message provided"}</p>
          <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
        `,
      })
      .then(() => {
        console.log("✅ Email sent successfully");
      })
      .catch((emailError) => {
        console.error(
          "⚠️ Email failed but data was saved:",
          emailError.message,
        );
      });
  } catch (error) {
    console.error("❌ Error in submitContact:", error.message);
    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later.",
    });
  }
};

module.exports = { submitContact };
