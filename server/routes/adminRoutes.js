const express = require("express");
const router = express.Router();
const Admin = require("../models/admin");
const fetchadmin = require("../middleware/fetchadmin");
const jwt = require("jsonwebtoken");
const jwtsecret = "xyz123";

// Route 1: Method :'POST' , Create Admin
router.post("/createadmin", async (req, res) => {
  const { username, password } = req.body;
  try {
    let admin = await Admin.findOne({ username });
    if (admin) {
      return res
        .status(400)
        .json({ success: false, error: "Admin already exists" });
    }
    admin = await Admin.create({
      username: req.body.username,
      password: req.body.password,
    });

    res.status(200).json({ success: true, admin });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some Internal Server Error");
  }
});

// Route 2: Method :'POST' , Login the Existing Admin.
router.post("/loginadmin", async (req, res) => {
  const { username, password } = req.body;
  try {
    //,
    let admin = await Admin.findOne({ username });
    if (!admin) {
      return res
        .status(400)
        .json({ success: false, error: "Admin doesn't exists" });
    }
    const PassComp = await password.localeCompare(admin.password);
    if (PassComp !== 0) {
      success = false;
      return res
        .status(400)
        .json({ success: false, error: "Enter the Valid Credentials" });
    }
    let data = admin.id;
    const adminToken = jwt.sign(username, jwtsecret);
    console.log("adminToken => ", adminToken);
    const result = await Admin.findByIdAndUpdate(
      { _id: data },
      {
        $set: {
          adminToken: adminToken,
        },
      }
    );
    res.status(200).json({ success: true, adminToken });
  } catch (error) {
    console.error(error.message, "*******error in token");
    res.status(500).send("Some Internal Server---- Error");
  }
});

router.get("/getadmin", fetchadmin, async (req, res) => {
  try {
    const username = req.username;
    const admin = await Admin.findOne({ username });

    res.json(admin);
    // console.log(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some Internal Server Error00000");
  }
});

module.exports = router;
