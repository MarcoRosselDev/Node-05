const express = require("express");
const { people, products } = require("./data.js");
const { person } = require("./routes/home.js");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api", person);

app.listen(5000, () => {
  console.log("Escuchando en el puerto 5000");
});

console.log("test from ubuntu");
console.log("test from ubuntu");
console.log("test from ubuntu");
console.log("test from ubuntu");
console.log("test from ubuntu");
