const express = require("express");
const formidable = require("express-formidable");
const router = express.Router();
const fetchuser = require("../middleware/fetchlogin");

// controllers
const {
  createPortfolio,
  allportfolio,
  getportfolio,
  addmodule,
  getmodule,
  addVideo,
} = require("../controllers/portfolio");

// Create Portfolio
router.post("/createportfolio", fetchuser, createPortfolio);
router.get("/allportfolio", allportfolio);
router.get("/allportfolio/:portfolioSlug", getportfolio);

// Add Module
router.post("/addmodule/:portfolioSlug", fetchuser, addmodule);
router.get("/getmodule/:portfolioSlug/:moduleNumber", getmodule);

// Add video
router.post("/addmodule/:portfolioSlug/:moduleNumber", fetchuser, addVideo);

module.exports = router;
