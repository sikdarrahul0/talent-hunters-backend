// internal imports
const Job = require("../models/Job");

// add a new job post
const addPost = async (req, res) => {
  try {
    const newPost = new Job(req.body);
    await newPost.save();
    res.status(200).json({
      message: "Job post was successfully posted!",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// approve post by admin
const approvePost = async (req, res) => {
  try {
    const post = await Job.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          status: "approved",
        },
      },
      {
        useFindAndModify: false,
      }
    );
    res.status(200).json({
      message: "Job post was successfully approved!",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// get all job post for admin
const allPost = async (req, res) => {
  try {
    const post = await Job.find({});
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// get a single job post by id
const singleJob = async (req, res) => {
  try {
    const post = await Job.find({ _id: req.params.id });
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// get employer posted job
const employerJob = async (req, res) => {
  try {
    const post = await Job.find({ username: req.params.id });
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
// get all jobs by category wise or get all jobs
const selectedJobs = async (req, res) => {
  try {
    if (req.params.id == "undefined") {
      const post = await Job.find({ status: "approved" });
      res.status(200).json(post);
    } else {
      const post = await Job.find({
        status: "approved",
        category: req.params.id,
      });
      res.status(200).json(post);
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
// delete single job
const deleteJob = async (req, res) => {
  try {
    await Job.deleteOne({ _id: req.params.id });
    res.status(200).json({
      message: "Job post was successfully deleted",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  addPost,
  approvePost,
  allPost,
  singleJob,
  employerJob,
  selectedJobs,
  deleteJob,
};
