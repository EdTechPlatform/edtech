const express = require("express");
const User = require("../models/user");
const fetchuser = require("../middleware/fetchlogin");

const {
  signinController,
  signupController,
} = require("../controllers/userController");

const router = express.Router();

router.get("/test", async (req, res) => {
  res.send("Test Api");
});

router.post("/signin", signinController);
router.post("/signup", signupController);

//Register API....//

router.post("/register", fetchuser, async (req, res) => {
  // const emailId = req.email;
  const emailId = req.email;

  const { dob, gender, address1, address2, city, state, pin, country, phone } =
    req.body;

  try {
    //const oldUser = await User.findOne({ email });

    await User.findOneAndUpdate(
      { email: emailId },
      {
        $set: {
          dob,
          gender,
          address1,
          address2,
          city,
          state,
          pin,
          country,
          phone,
        },
      }
    );
    const user = await User.findOne({ email: emailId });
    res.json({ success: true, message: user });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some Internal Server Error");
  }
});

// ROUTE 4: Get Loggedin user details using: GET
router.get("/getuser", fetchuser, async (req, res) => {
  try {
    const useremail = req.email;
    const user = await User.findOne({ email: useremail });

    res.json(user);
    // console.log(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some Internal Server Error");
  }
});

module.exports = router;
