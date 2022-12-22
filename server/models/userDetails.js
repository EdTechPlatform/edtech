const mongoose = require("mongoose");

const UserDetailsScehma = mongoose.Schema(
  {
    email: { type: String, unique: true },
    dob: String,
    gender: String,
    address1: String, 
    address2: String, 
    city: String, 
    state: String, 
    pin: String, 
    country: String, 
    phone: String,
  },
  {
    collection: "UserInfo",
  }
);

mongoose.model("UserInfo", UserDetailsScehma);
