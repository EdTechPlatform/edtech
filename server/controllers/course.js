const AWS = require("aws-sdk");
const { nanoid } = require("nanoid");
// import { nanoid } from "nanoid";
const Course = require("../models/course");
// const Completed = require("../models/completed");
const slugify = require("slugify");
const { readFileSync } = require("fs");
const User = require("../models/user");

// const stripe = require("stripe")(process.env.STRIPE_SECRET);

const awsConfig = {
  accessKeyId: "AKIAQTJ7AFPA3ZRWR75Z",
  secretAccessKey: "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",
  region: "ap-south-1",
  apiVersion: "2010-12-17",
};

const S3 = new AWS.S3(awsConfig);

const courses = async (req, res) => {
  const all = await Course.find({ published: true })
    // .populate("creator", "email")
    .exec();
  res.json(all);
};

const coursescreate = async (req, res) => {
  const { name, description, category } = req.body;
  const useremail = req.email;
  // console.log("CREATE COURSE => ", req.body);
  // return;
  try {
    const alreadyExist = await Course.findOne({
      slug: slugify(req.body.name),
      // slug: slugify(req.body.name),
    });
    if (alreadyExist) return res.status(400).send("Title is taken");

    const course = await new Course({
      name,
      description,
      category,
      slug: slugify(req.body.name),
      // userId: req.user._id,
      creator: useremail,
      // ...req.body,
    }).save();

    res.status(200).json(course);
  } catch (err) {
    console.log(err);
    return res.status(400).send("Course create failed. Try again.");
  }
};

const update = async (req, res) => {
  const useremail = req.email;
  try {
    const { slug } = req.params;
    // console.log(slug);
    const course = await Course.findOne({ slug }).exec();
    // console.log("COURSE FOUND => ", course);
    if (useremail != course.creator) {
      return res.status(400).send("Unauthorized");
    }

    const updated = await Course.findOneAndUpdate({ slug }, req.body, {
      new: true,
    }).exec();

    res.json(updated);
  } catch (err) {
    console.log(err);
    return res.status(400).send(err.message);
  }
};

const read = async (req, res) => {
  const slugstring = req.params.slug;
  console.log(slugstring);
  try {
    // const course = await Course.findOne({ slug: req.params.slug })
    const course = await Course.findOne({ slug: slugstring })
      // .populate("instructor", "_id name")
      .exec();
    res.json(course);
  } catch (err) {
    console.log(err);
  }
};

const addLesson = async (req, res) => {
  // const useremail = req.email;
  const slugstring = req.params.slug;
  console.log(slugstring);
  try {
    const course = await Course.findOne({ slug: slugstring });
    if (!course) {
      return res.status(400).send("Unauthorized");
    }
    const { video } = req.files;
    const title = video.name;
    const slug = slugify(title);
    console.log("video => ", video);
    console.log("title => ", title);
    console.log("slug => ", slug);
    
    if (!video) return res.status(400).send("No video");
    if (video.type !== "video/mp4") return res.status(400).send("Not a right format for video");


    // video params
    const params = {
      Bucket: "edtech-gaurav",
      Key: `${nanoid()}.${video.type.split("/")[1]}`,
      Body: readFileSync(video.path),
      ACL: "public-read",
      ContentType: video.type,
    };

    // upload to s3
    S3.upload(params, async (err, data) => {
      if (err) {
        console.log(err);
        res.sendStatus(400);
      }
      // console.log(data);
      const result = await Course.findOneAndUpdate(
        { slug: slugstring },
        {
          $push: {
            lessons: {
              title,
              video: data,
              slug,
            },
          },
        }
      );
      res.status(200).json({ data: data, result: result });
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { courses, coursescreate, update, read, addLesson };
