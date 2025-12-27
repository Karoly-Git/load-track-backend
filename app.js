require("dotenv").config();
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.json(
        {
            "name": "load-track-backend",
            "developer": {
                "name": "Karoly Hornyak",
                "tel": "+447421411763",
                "email": "karoly.webdev@gmail.com",
                "web": "karolyhornyak.com"
            },
        }
    );
});

module.exports = app;
