require('dotenv').config(); // to use .env file
const express = require("express"); //ak baar jab dependencies install krli to uska obj use krlo
// import express form "express";
// the diff is only style of import
const app = express(); // nowuse functions like Math.pi()
const port = 4000;  // is port pr listen krlo

app.get("/", (req, res)=>{
    res.send("Hello world")
})
app.get("/twitter", (req, res)=>{   // / slash lgana nhi bhulna
    res.send("Naam badal gya")
})
app.get("/login", (req, res)=>{
    res.send("<h1>aja bhai jldi se</h1>")
})

app.listen(process.env.PORT, ()=>{
    console.log(`sunai de rha ha behra nhi hu mai, port no. ${process.env.PORT}`);
})