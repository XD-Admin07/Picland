const { instance } = require("../config/razorpay")
const crypto = require("crypto")
const User = require('../models/User')
const mongoose = require("mongoose")

//Capture the payment and initiate the Razorpay order
exports.capturePayment = async (req, res) => {
    let total_amount = 0;
    const user = req.user.id;
    const { sub_type } = req.body;
    console.log("subType is...", sub_type);
    //Check if the user is already subscribed
    const sub = await User.findById(user);

    if (sub.Plan === "yes") {
        return res.status(200).json({ success: false, message: "User already subscribed" })
    }

    //Add the price of the subscription

    if (sub_type === "yearly") {
        total_amount += 18999;
    }
    else {
        total_amount += 2999;
    }


    const options = {
        amount: total_amount * 100,
        currency: "INR",
        receipt: Math.random(Date.now()).toString(),
        // subType:sub_type,
    }

    try {
        //Initiate the payment using Razorpay
        const paymentResponse = await instance.orders.create(options)
        console.log(paymentResponse)
        res.json({
            success: true,
            data: paymentResponse,
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "Could not initiate order." })

    }
}


exports.verifyPayment = async (req, res) => {
    const razorpay_order_id = req.body?.razorpay_order_id
    const razorpay_payment_id = req.body?.razorpay_payment_id
    const razorpay_signature = req.body?.razorpay_signature
    const { sub_type } = req.body
    console.log("subType is...", sub_type);
    const userId = req.user.id;
    console.log("userId is...", userId);
    console.log("order_id", razorpay_order_id)
    console.log("razorpay_payment_id", razorpay_payment_id)
    console.log("signature", razorpay_signature)

    if (
        !razorpay_order_id ||
        !razorpay_payment_id ||
        !razorpay_signature ||
        !sub_type ||
        !userId
    ) {
        return res.status(200).json({ success: false, message: "Payment Failed" })
    }

    //send payment sccess email

    //update user subscription status

    let expiryDate;
    if (sub_type === 'yearly') {
        expiryDate = new Date(Date.now() + (365 * 24 * 60 * 60 * 1000));
    } else if (sub_type === 'monthly') {
        expiryDate = new Date(Date.now() + (28 * 24 * 60 * 60 * 1000));
    }
    const sub = await User.findByIdAndUpdate(
        userId, {
        Plan: sub_type,
        PlanDate: expiryDate

    },
        { new: true })

    console.log("Subscription", sub)
        // Reload the page after successful payment
        // res.send('<script>window.location.reload()</script>');
    return res.status(200).json({ success: true, message: "Payment suceess" })
}