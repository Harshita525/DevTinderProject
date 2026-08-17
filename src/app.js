const express = require("express");
const app = express();
const { adminAuth } = require("../middlewares/auth")
const db = require("./config/db");
const userRoutes =  require("./routes/userRoutes")

app.use(express.json())

app.use("/api", userRoutes);


module.exports = app 