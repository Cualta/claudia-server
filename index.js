const { required } = require("nodemon/lib/config");

const express = required("express");

const app = express();

app.get("/test", (req, res) => {
  res.send("is working claudia");
});

app.listen(5555, () => {
  console.log("liseting on port 5555");
});
