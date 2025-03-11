const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const PORT = 5000;
const HOST = "0.0.0.0";

const data = [
  { name: "Max", age: 27 },
  { name: "paul", age: 27 },
  { name: "peter", age: 27 },
  { name: "matteo", age: 27000 },
  { name: "Raphael", age: 18 },
];

app.get("/people", (req, res) => {
  res.send(data);
});

app.get("/people/:id", (req, res) => {
  let id = req.params.id;
  res.send(data[id]);
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
