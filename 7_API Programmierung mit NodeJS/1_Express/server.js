const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
 
const port = 3000;

const data = [
    { name: 'Max', age: 27 },
    { name: 'paul', age: 27 },
    { name: 'peter', age: 27 },
    { name: 'matteo', age: 27 }
]


app.get('/people', (req, res) => {
    res.send(data);
})


app.get('/people/:id', (req, res) => {
    let id = req.params.id;
    res.send(data[id]);
    
})


app.delete('/people/:id', (req, res) => {
    let id = req.params.id;
    data.splice(id, 1);
    res.send("done");
})


app.post("/people", (req, res) => {
    data.push(req.body);
    res.send(req.body);
})


app.listen(port, () => {
    console.log("Server running on port " + port);
})