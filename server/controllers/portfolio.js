const AWS = require("aws-sdk");
const { nanoid } = require("nanoid");
const Portfolio = require("../models/portfolio");
const slugify = require("slugify");
const { readFileSync } = require("fs");
const User = require("../models/user");

const awsConfig = {
  accessKeyId: "",
  secretAccessKey: "",
  region: "",
  apiVersion: "",
};

const S3 = new AWS.S3(awsConfig);

// Create Portfolio
const createPortfolio = async (req, res) => {
  const { portfolioName, portfolioDescription } = req.body;
  const useremail = req.email;
  const portfolioSlug = slugify(req.body.portfolioName);
  try {
    const alreadyExist = await Portfolio.findOne({ portfolioSlug });
    if (alreadyExist) return res.status(400).send("Portfolio Title is taken");

    const portfolio = await new Portfolio({
      portfolioName,
      portfolioDescription,
      portfolioSlug: slugify(req.body.portfolioName),
      portfolioCreator: useremail,
    }).save();

    res.status(200).json(portfolio);
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .json({ msg: "Portfolio create failed. Try again.", error: err });
  }
};

// All Portfolio
const allportfolio = async (req, res) => {
  const all = await Portfolio.find({ published: true });
  res.json(all);
};

// Get Specific Portfolio
const getportfolio = async (req, res) => {
  const portfolioSlug = req.params.portfolioSlug;
  const portfolio = await Portfolio.findOne({ portfolioSlug });
  res.json({ portfolio });
};

// Get a particular Module
const getmodule = async (req, res) => {
  const portfolioSlug = req.params.portfolioSlug;
  const i = req.params.moduleNumber;
  const portfolio = await Portfolio.findOne({ portfolioSlug });
  const result = portfolio.modules[i - 1];
  res.json({  result });
};

// Add a new module
const addmodule = async (req, res) => {
  const { moduleName, moduleNumber, moduleDescription } = req.body;
  const moduleSlug = slugify(req.body.moduleName);
  const useremail = req.email;
  try {
    const portfolioSlug = req.params.portfolioSlug;
    const portfolio = await Portfolio.findOne({ portfolioSlug });
    if (!portfolio) {
      return res.status(400).send("Portfolio Not Found");
    }
    if (useremail != portfolio.portfolioCreator) {
      return res.status(400).send("Unauthorized");
    }
    const count = Object.keys(portfolio.modules).length;
    // console.log("Modules count => ", count);

    if (count === moduleNumber - 1) {
      const NEW_DOC = {
        moduleName,
        moduleNumber,
        moduleDescription,
        moduleSlug,
      };
      const result = await Portfolio.findOneAndUpdate(
        { portfolioSlug },
        { $push: { modules: NEW_DOC } }
      );
      res.status(200).json({ result: result });
    } else if (count !== moduleNumber - 1) {
      return res.status(400).send("Please enter the latest Module Number");
    } else {
      return res.status(400).send("Module Number Already Exists");
    }
  } catch (err) {
    console.log(err);
    return res.status(400).send({ err });
  }
};

// Add videos to specific module
const addVideo = async (req, res) => {
  const { videoTitle, videoNumber } = req.body;
  const videoSlug = slugify(req.body.videoTitle, "_");
  const useremail = req.email;
  try {
    const portfolioSlug = req.params.portfolioSlug;
    const i = req.params.moduleNumber;

    const portfolio = await Portfolio.findOne({ portfolioSlug });
    if (!portfolio) {
      return res.status(400).send("Portfolio Not Found");
    }
    if (useremail != portfolio.portfolioCreator) {
      return res.status(400).send("Unauthorized");
    }

    const Modulescount = Object.keys(portfolio.modules).length;
    if (i < 1 || i > Modulescount) {
      return res.status(400).send("Enter a valid module number");
    }

    const videoCount = Object.keys(portfolio.modules[i - 1].videos).length;

    if (videoCount === videoNumber - 1) {
      const NEW_DOC = {
        videoTitle,
        videoNumber,
        videoSlug,
      };

      const result = await Portfolio.findOneAndUpdate(
        {
          portfolioSlug,
          modules: {
            $elemMatch: {
              moduleNumber: i,
            },
          },
        },
        {
          $push: { "modules.$.videos": NEW_DOC },
        }
      );
      res.status(200).json({ result: result });
    } else if (videoCount !== i - 1) {
      return res
        .status(400)
        .send(
          "Video Number Alreay Exists or Please enter the latest Video Number"
        );
    } else {
      return res.status(400).send("Video Number Not Exists");
    }
  } catch (err) {
    console.log(err);
    return res.status(400).send({ err });
  }
};

module.exports = {
  createPortfolio,
  allportfolio,
  getportfolio,
  addmodule,
  getmodule,
  addVideo,
};
