const express = require("express");

const app = express();

app.get("/api", (req, res) => {
  res.status(200).send("Hola mundirijillo!");
});

app.listen(5000, () => {
  console.log("Escuchando en el puerto 5000");
});
