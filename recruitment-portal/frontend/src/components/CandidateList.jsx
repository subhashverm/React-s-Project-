import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CandidateList() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("candidates")) || [];
    setCandidates(data);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Candidate List</h2>
      {candidates.length === 0 ? (
        <p>No candidates yet.</p>
      ) : (
        <ul>
          {candidates.map((c) => (
            <li key={c.id}>
              {c.name} ({c.email}) - {c.resume}
              &nbsp; <Link to={`/payment/${c.id}`}>Proceed to Payment</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CandidateList;
