const express = require("express");
const router = express.Router();
const multerHandler = require("../middlewares/candidate/multerHandler");

// internal imports
const {
  saveInformation,
  allCandidates,
} = require("../controller/candidateController");

//cadidate documents post
router.post("/", multerHandler.upload.single("resume"), saveInformation);

router.get("/candidate/:id", allCandidates);
module.exports = router;
