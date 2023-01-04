const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  adminToken: { type: String, default: "" },
  dateOfJoin: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Admin", adminSchema);
