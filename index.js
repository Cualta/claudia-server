const express = require("express");
const axios = require("axios").default;
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

let password = "Pasword123";
let webhook = [];

//app.use("/pokemon", require("./pokemonController"));

const fakeMessages = ["hello pokemon name", "you has catch this pokemon"];

setInterval(() => {
  const message = fakeMessages[Math.floor(Math.random() * 3)];
  console.log(message);
  webhook.forEach((url) => {
    axios.post(url, { message });
  });
}, 1000);

app.get("/test", (req, res) => {
  res.send("is working Claudia!!!");
});

app.post("/webhook", (req, res) => {
  //const url = req.query.url;
  const { url, password } = req.body;
  if (password !== THE_PASWORD) {
    res.status(401).end();
    return;
  }

  console.log("!!!! Somebody registered a webhook !!!");
  webhooks.push(url);
  res.end();
});

app.delete("/webhook", (req, res) => {
  const url = req.query.url;
  webhooks = webhooks.filter((el) => el !== url);
  res.end();
});

/* app.get("/pokemon", (req, res) => {
  res.json("pokemon" + pokemon.json);
}); */

app.listen(5555, () => {
  console.log("liseting on port 5555");
});
