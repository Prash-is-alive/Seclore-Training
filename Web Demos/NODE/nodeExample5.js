const express = require("express");
const app = express();

app.get("/hello", (req, res) => {
  res.send("<h1>Hello bhaii</h1>");
});

app.listen(3000);
