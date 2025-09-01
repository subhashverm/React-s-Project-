const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  skills: { type: [String], required: true },
  experience: { type: Number, required: true },
  resume: { type: String }, // store file path or link
});

module.exports = mongoose.model("Candidate", candidateSchema);
