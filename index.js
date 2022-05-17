const express = require("express");

const app = express();

app.get("/test", (req, res) => {
  res.send("is working claudia");
});

app.get("/pokemon", (req, res) => {
  res.json(pokemon.json);
});

app.listen(5555, () => {
  console.log("liseting on port 5555");
});

function getAllPokemon(req, res) {
  res.json(pokemon);
}
