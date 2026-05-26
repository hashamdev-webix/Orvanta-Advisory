const express = require("express");
const router = express.Router();
const Stripe = require("stripe");
const UserProfile = require("../models/UserProfile");

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Create payment intent for £100 signup
router.post("/create-signup-intent", async (req, res) => {
  const { clerkUserId, email } = req.body;

  try {
    // Check if user already paid
    const existingUser = await UserProfile.findOne({ clerkUserId });
    if (existingUser && existingUser.paid) {
      return res.status(400).json({
        success: false,
        message: "User has already paid",
      });
    }

    // Create payment intent for £100 (10000 pence)
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 10000, // £100 in pence
      currency: "gbp",
      metadata: {
        clerkUserId,
        email,
        type: "signup_fee",
      },
    });

    console.log("✅ Payment intent created:", paymentIntent.id);

    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("❌ Error creating payment intent:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to create payment intent",
    });
  }
});

// Confirm signup payment and save user
router.post("/confirm-signup", async (req, res) => {
  const { clerkUserId, email, firstName, lastName, paymentIntentId } = req.body;

  try {
    // Verify payment with Stripe
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    if (paymentIntent.status !== "succeeded") {
      return res.status(400).json({
        success: false,
        message: "Payment not successful",
      });
    }

    // Check if user already exists
    let user = await UserProfile.findOne({ clerkUserId });

    if (user) {
      // Update existing user
      user.paid = true;
      user.paidAt = new Date();
      user.firstName = firstName;
      user.lastName = lastName;
      await user.save();
    } else {
      // Create new user
      user = new UserProfile({
        clerkUserId,
        email,
        firstName,
        lastName,
        paid: true,
        paidAt: new Date(),
      });
      await user.save();
    }

    console.log("✅ User payment confirmed and saved:", clerkUserId);

    res.status(200).json({
      success: true,
      message: "Payment confirmed successfully",
    });
  } catch (error) {
    console.error("❌ Error confirming payment:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to confirm payment",
    });
  }
});

// Create payment intent for booking (hourly service)
router.post("/create-booking-intent", async (req, res) => {
  const { hours, clerkUserId } = req.body;

  try {
    const ratePerHour = 850; // £850 per hour
    const amount = hours * ratePerHour * 100; // Convert to pence

    // Create payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "gbp",
      metadata: {
        clerkUserId,
        hours: hours.toString(),
        type: "booking_payment",
      },
    });

    console.log("✅ Booking payment intent created:", paymentIntent.id);

    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
      amount: amount / 100, // Return amount in pounds
    });
  } catch (error) {
    console.error("❌ Error creating booking payment intent:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to create payment intent",
    });
  }
});

module.exports = router;
