import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // backend ka URL
});

// Candidate create (form submit)
export const createCandidate = (data) => API.post("/candidates", data);
