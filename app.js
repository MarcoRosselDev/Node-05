const express = require("express");
const tasks = require("./routes/tasks.js");
const app = express();
//app.use(express.urlencoded({ extended: false }));
//app.use(express.json());

require("dotenv").config();
const password = process.env.PASSWORD;
const username = process.env.USERNAME_DB;
const cluster = process.env.CLUSTER;

const url = `mongodb+srv://${username}:${password}@${cluster}.vis1qwi.mongodb.net/?retryWrites=true&w=majority`;

const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  const a = await mongoose.connect(
    `mongodb://${username}:${password}@127.0.0.1:27017/test`
  );
  if (a) {
    console.log("success");
  } else {
    console.log("filed");
  }
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

main();

app.use(express.static("./public"));
app.use("/api/v1/tasks", tasks);

app.get("/api", (req, res) => {
  res.status(200).json({ data: "mundirijillo!" });
});

// app.get('/api/v1/tasks')-------> api=rutas api (para no confundir con rutars server side como /login o /user)
// app.post('/api/v1/tasks')
// app.get('/api/v1/tasks/:id')
// app.patch('/api/v1/tasks/:id')-----> notece la diferencia con put
// app.delete('/api/v1/tasks/:id')

app.listen(5000, () => {
  console.log("Escuchando en el puerto 5000");
});
