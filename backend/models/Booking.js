const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  clerkUserId: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
  },
  jobPosition: {
    type: String,
  },
  service: {
    type: String,
    default: "LMIA",
  },
  hours: {
    type: Number,
    required: true,
  },
  amountGBP: {
    type: Number,
    required: true,
  },
  stripePaymentId: {
    type: String,
  },
  status: {
    type: String,
    enum: ["pending", "in_progress", "completed"],
    default: "pending",
  },
  notes: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Booking", bookingSchema);
