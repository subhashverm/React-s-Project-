import React from "react";
import { Link } from "react-router-dom";

function SuccessPage() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Payment Successful 🎉</h2>
      <p>Thank you for your payment.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
}

export default SuccessPage;
