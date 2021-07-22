// external imports
const express = require("express");

//internal imports
const {
  addPost,
  approvePost,
  allPost,
  singleJob,
  employerJob,
  selectedJobs,
  deleteJob,
} = require("../controller/jobsController");

const router = express.Router();

//post a job post
router.post("/add", addPost);

// admin job approval req handle
router.put("/approve/:id", approvePost);

// get all job post
router.get("/all", allPost);

// get single job post
router.get("/single/:id", singleJob);

//get single employer posted job
router.get("/employer/:id", employerJob);

// get all jobs by category wise or get all approved jobs
router.get("/approved/post/:id", selectedJobs);

// delete single job
router.delete("/delete/:id", deleteJob);

module.exports = router;
