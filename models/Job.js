const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
  employerName: {
    type: String,
    required: true,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    trim: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  vacancy: {
    type: String,
    required: true,
  },
  responsibilities: {
    type: String,
    required: true,
  },
  requirements: {
    type: String,
    required: true,
  },
  jobType: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  education: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  otherBenefits: {
    type: String,
    required: true,
  },
  deadline: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "approved"],
    default: "pending",
  },
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
