const express = require("express");

const app = express();

app.get("/api", (req, res) => {
  res.status(200).send("Hola mundirijillo!");
});

// app.get('/api/v1/tasks')-------> api=rutas api (para no confundir con rutars server side como /login o /user)
// app.post('/api/v1/tasks')
// app.get('/api/v1/tasks/:id')
// app.patch('/api/v1/tasks/:id')-----> notece la diferencia con put
// app.delete('/api/v1/tasks/:id')

app.listen(5000, () => {
  console.log("Escuchando en el puerto 5000");
});
