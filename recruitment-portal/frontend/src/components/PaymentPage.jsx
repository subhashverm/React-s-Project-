import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function loadRazorpay(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

function PaymentPage() {
  const { id } = useParams();
  const [candidate, setCandidate] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const candidates = JSON.parse(localStorage.getItem("candidates")) || [];
    const c = candidates.find((item) => item.id.toString() === id);
    setCandidate(c);
  }, [id]);

  const handlePayment = async () => {
    const res = await loadRazorpay("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      alert("Razorpay SDK failed to load. Check your internet connection.");
      return;
    }

    const options = {
      key: "rzp_test_1234567890abcdef", // apna Razorpay test key yaha dalna
      currency: "INR",
      amount: 50000, // Rs.500
      name: "Recruitment Portal",
      description: "Payment for candidate shortlisting",
      handler: function (response) {
        alert("Payment successful!");
        navigate("/success");
      },
      prefill: {
        name: candidate?.name,
        email: candidate?.email,
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Payment Page</h2>
      {candidate ? (
        <div>
          <p>Candidate: {candidate.name}</p>
          <p>Email: {candidate.email}</p>
          <button onClick={handlePayment}>Pay ₹500</button>
        </div>
      ) : (
        <p>Loading candidate...</p>
      )}
    </div>
  );
}

export default PaymentPage;
