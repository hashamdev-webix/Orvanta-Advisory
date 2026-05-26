const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const contactRoutes = require("./routes/contactRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:8080",
      "https://orvanta-journey.vercel.app",
      "https://orvantaadvisory.com",
      "https://www.orvantaadvisory.com",
      /\.vercel\.app$/,
    ],
    credentials: true,
  }),
);
app.use(express.json());

// Health check route
app.get("/", (req, res) => {
  res.send("🚀 Orvanta API is running ✅");
});

// Routes
app.use("/api/contact", contactRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/bookings", bookingRoutes);

// Connect DB then start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
});
