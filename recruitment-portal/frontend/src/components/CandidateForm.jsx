import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CandidateForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const candidate = {
      id: Date.now(),
      name,
      email,
      resume: resume ? resume.name : "No file",
    };

    let candidates = JSON.parse(localStorage.getItem("candidates")) || [];
    candidates.push(candidate);
    localStorage.setItem("candidates", JSON.stringify(candidates));

    navigate("/candidates");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Candidate Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        /><br/><br/>

        <input
          type="email"
          placeholder="Email ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br/><br/>

        <input
          type="file"
          onChange={(e) => setResume(e.target.files[0])}
        /><br/><br/>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CandidateForm;
