//Dependencies 
const express = require("express");

// Configuarion- app is now an active instance of express
const app = express();

//Routes
app.get("/", (req, res) => {
    res.send("Welcome to the Express Minerals App");
})

//Export 
module.exports = app;