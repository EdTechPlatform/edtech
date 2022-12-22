const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: false},
    profilePicture: {type: String, required: false},
    id: {type: String},
    dob: String,
    gender: String,
    address1: String, 
    address2: String, 
    city: String, 
    state: String, 
    pin: String, 
    country: String, 
    phone: String,
})

module.exports = mongoose.model("User", userSchema)