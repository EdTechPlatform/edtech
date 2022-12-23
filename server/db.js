const mongoose = require("mongoose");
const mongostr = "mongodb://0.0.0.0:27017/EdTech";

const connectToMongo = () => {
  mongoose.connect(mongostr, () => {
    console.log("MongoDB connection Successfull");
  });
};

module.exports = connectToMongo;
