const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

mongoose
  .connect("mongodb://localhost:27017/mydatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB verbunden"))
  .catch((err) => console.error("MongoDB Verbindung fehlgeschlagen", err));

const PORT = process.env.PORT || 5000;
const HOST = "0.0.0.0";

const Quote = require("./models/quoteShema");

app.get("/", async (req, res) => {
  res.json(Quotes);
});

app.listen(PORT, HOST, () => {
  console.info("rahhh");
});
