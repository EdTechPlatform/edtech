const express = require("express");
const formidable = require("express-formidable");
const router = express.Router();
const fetchuser = require("../middleware/fetchlogin");

// controllers
const {
  createPortfolio,
  allportfolio,
  getportfolio,
  deletePortfolio,
  addmodule,
  getmodule,
  deletemodule,
  addVideo,
} = require("../controllers/portfolio");

// Create Portfolio
router.post("/createportfolio", fetchuser, createPortfolio);
router.get("/allportfolio", allportfolio);
router.get("/allportfolio/:portfolioSlug", getportfolio);
router.delete("/allportfolio/:portfolioSlug", deletePortfolio);

// Add Module
router.post("/addmodule/:portfolioSlug", fetchuser, addmodule);
router.get("/getmodule/:portfolioSlug/:moduleNumber", getmodule);
router.put("/getmodule/:portfolioSlug/:moduleNumber", deletemodule);

// Add video
router.post("/addvideo/:portfolioSlug/:moduleNumber", fetchuser, formidable(), addVideo);

module.exports = router;
