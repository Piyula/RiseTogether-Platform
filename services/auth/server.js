const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(()=>console.log("MongoDB Connected"));

app.get("/health",(req,res)=>res.send("Auth service running"));

const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

app.listen(5001, ()=> console.log("Auth service on 5001"));