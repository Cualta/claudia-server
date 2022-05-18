const express = require("express");
const axios = require("axios").default;
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/test", (req, res) => {
  res.send("is working Claudia!!!");
});

//this is my path after my nkrog id
app.post("/user/message", (req, res) => {
  console.log(req.body);
  res.end();
});

app.listen(5555, () => {
  console.log("Listening my port 5555");
});

//https://bafd-74-56-129-177.ngrok.io
