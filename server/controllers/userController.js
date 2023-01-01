const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const axios = require("axios");
const config = require("config");
const jwtSecret = "xyz123";
const User = require("../models/user");

const signinController = async (req, res) => {
  if (req.body.googleAccessToken) {
    // gogole-auth
    const { googleAccessToken } = req.body;

    axios
      .get("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: {
          Authorization: `Bearer ${googleAccessToken}`,
        },
      })
      .then(async (response) => {
        const firstName = response.data.given_name;
        const lastName = response.data.family_name;
        const email = response.data.email;
        const picture = response.data.picture;
        const token = jwt.sign(email, jwtSecret);

        const existingUser = await User.findOne({ email });

        if (!existingUser)
          return res
            .status(404)
            .json({ success: false, message: "User don't exist!" });

        res.status(200).json({ success: true, result: existingUser, token });
      })
      .catch((err) => {
        res
          .status(400)
          .json({ success: false, message: "Invalid access token! signin" });
      });
  }
};

const signupController = async (req, res) => {
  if (req.body.googleAccessToken) {
    const { googleAccessToken } = req.body;

    axios
      .get("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: {
          Authorization: `Bearer ${googleAccessToken}`,
        },
      })
      .then(async (response) => {
        const firstName = response.data.given_name;
        const lastName = response.data.family_name;
        const email = response.data.email;
        const picture = response.data.picture;
        const token = jwt.sign(email, jwtSecret);
        const existingUser = await User.findOne({ email });

        if (existingUser)
          return res
            .status(400)
            .json({ success: false, message: "User already exist!" });

        const result = await User.create({
          verified: "true",
          email,
          firstName,
          lastName,
          profilePicture: picture,
          jToken: token,
        });

        res.status(200).json({ success: true, result, token });
      })
      .catch((err) => {
        res
          .status(400)
          .json({ success: false, message: "Invalid access token! signUp" });
      });
  }
};

module.exports = {
  signinController,
  signupController,
};
