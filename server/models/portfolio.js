const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const videoSchema = new mongoose.Schema(
  {
    videoTitle: {
      type: String,
    },
    videoNumber: { type: Number },
    videoSlug: {
      type: String,
      lowercase: true,
    },
    // video: { type: Object },
  },
  { timestamps: true }
);

const moduleSchema = new mongoose.Schema(
  {
    moduleName: {
      type: String,
      trim: true,
      minlength: 3,
      maxlength: 320,
      required: true,
      unoque: true,
    },
    moduleNumber: { type: Number, required: true, unoque: true },
    moduleSlug: {
      type: String,
      lowercase: true,
    },
    moduleDescription: { type: String },

    videos: [videoSchema],
  },
  { timestamps: true }
);

const portfolioSchema = new mongoose.Schema(
  {
    portfolioName: {
      type: String,
      trim: true,
      minlength: 3,
      maxlength: 320,
      required: true,
      unique: true,
    },
    portfolioSlug: {
      type: String,
      lowercase: true,
      unique: true,
    },
    portfolioDescription: {
      type: String,
    },
    portfolioCreator: {
      type: String,
      ref: "User",
      required: true,
    },
    published: { type: Boolean, default: true },
    modules: [moduleSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Portfolio", portfolioSchema);
