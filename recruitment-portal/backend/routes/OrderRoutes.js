import express from "express";
import Razorpay from "razorpay";
import crypto from "crypto";
import Order from "../models/Order.js";
import nodemailer from "nodemailer";

const router = express.Router();

// ✅ Create Razorpay Order
router.post("/create-order", async (req, res) => {
  try {
    const { email, phone, amount } = req.body;

    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const options = {
      amount: amount * 100,
      currency: "INR",
      receipt: `receipt_${Date.now()}`
    };

    const order = await instance.orders.create(options);

    const newOrder = new Order({
      email,
      phone,
      amount,
      orderId: order.id,
      status: "created"
    });

    await newOrder.save();

    res.json({ orderId: order.id, amount: order.amount, currency: order.currency });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating order");
  }
});

// ✅ Verify Payment
router.post("/verify-payment", async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, email } = req.body;

    const generatedSignature = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(razorpay_order_id + "|" + razorpay_payment_id)
      .digest("hex");

    if (generatedSignature !== razorpay_signature) {
      return res.status(400).json({ success: false, message: "Payment verification failed" });
    }

    const order = await Order.findOneAndUpdate(
      { orderId: razorpay_order_id },
      { paymentId: razorpay_payment_id, status: "paid" },
      { new: true }
    );

    // ✅ Send Email with eBook Link
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    let mailOptions = {
      from: `"Ebook Store" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your eBook Purchase Confirmation",
      html: `
        <h2>Thank you for your purchase!</h2>
        <p>Your payment was successful. You can download your eBook here:</p>
        <a href="https://drive.google.com/your-ebook-link" target="_blank">Download eBook</a>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: "Payment verified & eBook sent" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error verifying payment");
  }
});

export default router;
