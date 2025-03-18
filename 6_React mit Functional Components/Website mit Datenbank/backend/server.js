const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
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

app.post("/users", async (req, res) => {
  try {
    const newUser = new User(req.body); // Neuen Benutzer aus dem Request-Body erstellen
    await newUser.save(); // In MongoDB speichern
    res
      .status(201)
      .json({ message: "Benutzer erfolgreich erstellt!", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Fehler beim Speichern", error });
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Fehler beim Laden der Benutzer", error });
  }
});

app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
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
      if (net.family === "IPv4" && !net.internal) {
        return net.address;
      }
    }
  }
  return "localhost";
}
