const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "Auth service running" });
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Mongo Connected"))
  .catch(err => console.log(err));

app.listen(5001, () => {
  console.log("Auth Service running on port 5001");
});