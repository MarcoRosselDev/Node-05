const express = require("express");
const tasks = require("./routes/tasks.js");
const app = express();
const connectionDB = require("./db/connect.js");
//app.use(express.urlencoded({ extended: false }));
//app.use(express.json());

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

try {
  connectionDB();
  app.listen(5000, () => {
    console.log("Escuchando en el puerto 5000");
  });
} catch (error) {
  console.log(error);
}
