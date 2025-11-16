const express = require("express");
const app = express();
app.use(express.json());

let latestData = { temperature: null, humidity: null, timestamp: null };

app.post("/updateData", (req, res) => {
    latestData = {
        temperature: req.body.temperature,
        humidity: req.body.humidity,
        timestamp: new Date().toLocaleString()
    };
    console.log("Data received:", latestData);
    res.send("OK");
});

app.get("/getData", (req, res) => {
    res.json(latestData);
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
