const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

// Create new booking
router.post("/create", async (req, res) => {
  const {
    clerkUserId,
    userEmail,
    companyName,
    jobPosition,
    hours,
    amountGBP,
    notes,
    stripePaymentId,
  } = req.body;

  try {
    const newBooking = new Booking({
      clerkUserId,
      userEmail,
      companyName,
      jobPosition,
      hours,
      amountGBP,
      notes,
      stripePaymentId,
      status: "pending",
    });

    await newBooking.save();
    console.log("✅ Booking created:", newBooking._id);

    res.status(200).json({
      success: true,
      booking: newBooking,
    });
  } catch (error) {
    console.error("❌ Error creating booking:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to create booking",
    });
  }
});

// Get user's bookings
router.get("/my-bookings", async (req, res) => {
  const { clerkUserId } = req.query;

  try {
    const bookings = await Booking.find({ clerkUserId }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      bookings,
    });
  } catch (error) {
    console.error("❌ Error fetching bookings:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to fetch bookings",
    });
  }
});

module.exports = router;
