const connectToMongo = require("./db.js");
const express = require("express");
const cors = require("cors");
connectToMongo();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", require("./routes/userRoutes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`EdTech listening at http://localhost:${PORT}`);
});
