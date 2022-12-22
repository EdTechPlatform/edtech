const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')

const userRoutes = require("./routes/userRoutes")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/users", userRoutes)

const PORT = process.env.PORT || 5000;
const MONGOOSE_URL = "mongodb://0.0.0.0:27017/EdTech"

mongoose.connect(MONGOOSE_URL, {useNewUrlParser: true})
.then(()=> app.listen(PORT, ()=>{
    console.log(`Server is running at port ${PORT}`);
}))
.catch(err=>{
    console.log(err)
})

//Register API....//
require("./models/user");
const User = mongoose.model("User");
app.put("/register", async (req, res) => {
  const {email, dob, gender, address1, address2, city, state, pin, country, phone} = req.body;

  try {
     //const oldUser = await User.findOne({ email });

    await User.updateOne(
    {email},
    {$set:{
      dob,
      gender,
      address1,
      address2,
      city,
      state,
      pin,
      country,
      phone,
    }},
    );
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});