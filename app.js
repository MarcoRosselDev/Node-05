require("dotenv").config();
const password = process.env.PASSWORD;
const username = process.env.USERNAME_DB;
const cluster = process.env.CLUSTER;

const express = require("express");
const tasks = require("./routes/tasks.js");
const app = express();
//app.use(express.urlencoded({ extended: false }));
//app.use(express.json());

const url = `mongodb+srv://${username}:${password}@${cluster}.vis1qwi.mongodb.net/?retryWrites=true&w=majority`;

console.log(url);

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
