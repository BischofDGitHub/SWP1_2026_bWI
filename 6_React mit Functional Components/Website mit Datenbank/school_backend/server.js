const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const { log } = require("console");
require("dotenv").config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;
const HOST = "0.0.0.0";

mongoose
  .connect(process.env.MONGO_URL_SCHULE, {
    authSource: "admin",
  })
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Database couldn't connect:", err));

const QuoteSchema = new mongoose.Schema({
  content: { type: String, required: true },
  submitter: { type: String, required: true },
});

const Quote = mongoose.model("Quote", QuoteSchema);

app.post("/quotes", async (req, res) => {
  try {
    const newQuote = new Quote(req.body); // Neuen Benutzer aus dem Request-Body erstellen
    await newQuote.save(); // In MongoDB speichern
    res
      .status(201)
      .json({ message: "Benutzer erfolgreich erstellt!", quote: newQuote });
  } catch (error) {
    res.status(500).json({ message: "Fehler beim Speichern", error });
  }
});

app.get("/quotes", async (req, res) => {
  try {
    const Quote = require("./models/quoteShema");
    const quotes = await Quote.find();
    res.json(quotes);
  } catch (error) {
    res.status(500).json({ message: "Fehler beim Laden der Benutzer", error });
  }
});

app.get("/quotes", async (req, res) => {
  const quotes = (await Quote.find()) / res.json(users);
});

app.delete("/people/:id", (req, res) => {
  let id = req.params.id;
  data.splice(id, 1);
  res.send("done");
});

app.post("/people", (req, res) => {
  data.push(req.body);
  res.send(req.body);
});

app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${getLocalIP()}:${PORT}`);
});

function getLocalIP() {
  const os = require("os");
  const interfaces = os.networkInterfaces();
  for (const key in interfaces) {
    for (const net of interfaces[key]) {
      const firstTwoOctets = net.address.split(".")[0];
      if (net.family === "IPv4" && !net.internal && firstTwoOctets == "10") {
        return net.address;
      }
    }
  }
  return "localhost";
}
