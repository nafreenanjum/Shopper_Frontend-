import React from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51RjGEHIJPnnBlMboouq5FsDUVh3no7Ue8vjbqjdhbZ0ML7pHYioY33qNkCsrO4PsrTTnjcSMK5PukqVCfChz6G4o00GH2pYUZx");

const StripeCheckoutButton = ({ cartTotal }) => {
  const handleCheckout = async () => {
    const stripe = await stripePromise;

    const response = await fetch("http://localhost:3001/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: cartTotal }), // dynamic total
    });

    const data = await response.json();

    if (data.id) {
      stripe.redirectToCheckout({ sessionId: data.id });
    } else {
      alert("Stripe session creation failed.");
    }
  };

  return (
    <button onClick={handleCheckout}>
      Pay ₹{cartTotal || 0}
    </button>
  );
};

export default StripeCheckoutButton;
