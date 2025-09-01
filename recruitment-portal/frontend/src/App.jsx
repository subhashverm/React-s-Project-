import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CandidateForm from "./components/CandidateForm";
import CandidateList from "./components/CandidateList";
import PaymentPage from "./components/PaymentPage";
import SuccessPage from "./components/SuccessPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CandidateForm />} />
        <Route path="/candidates" element={<CandidateList />} />
        <Route path="/payment/:id" element={<PaymentPage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
}

export default App;
