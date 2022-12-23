const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: false },
  profilePicture: { type: String, required: false },
  // id: { type: String },
  dob: { type: String, default: "" },
  gender: { type: String, default: "" },
  address1: { type: String, default: "" },
  address2: { type: String, default: "" },
  city: { type: String, default: "" },
  state: { type: String, default: "" },
  pin: { type: String, default: "" },
  country: { type: String, default: "" },
  phone: { type: String, default: "" },
  dateOfJoin: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);

// const mongoose = require("mongoose");

// const UserDetailsScehma = mongoose.Schema(
//   {
//     email: { type: String, unique: true },
//     dob: String,
//     gender: String,
//     address1: String,
//     address2: String,
//     city: String,
//     state: String,
//     pin: String,
//     country: String,
//     phone: String,
//   },
//   {
//     collection: "UserInfo",
//   }
// );

// mongoose.model("UserInfo", UserDetailsScehma);
