const express = require("express");
const app = express();
const { people } = require("./data.js");

app.use(express.static("./public")); // nombrar index.html al archivo principal o no leera ningun archivo
// nesecario para codificar el body de el request
// ahora podemos ver req.body---> {clave:valor}<---from Payload From Data

// parse json
app.use(express.json()); // lo mismo, si no lo aplico no parsea el body enviado en el post

app.get("/", (req, res) => {
  res.status(200).send(login);
});

app.post("/login", (req, res) => {
  const { user } = req.body;
  if (user) {
    return res.status(200).send(`welcome ${user}.`);
  }
  res.status(404).send("por favor ingresa un usuario");
});

app.get("/api/people", (req, res) => {
  res.status(200).json(people);
});

app.post("/api/people", (req, res) => {
  //app.use(express.json())---> para poder acceder al body parceado en json
  const { nombre } = req.body;
  if (!nombre) {
    return res.status(404).json({
      successfull: false,
      response: "Porfavor proporcione un nombre.",
    });
  } else {
    let allPeople = [...people];
    const id = allPeople.length + 1;
    allPeople.push({ id: id, name: nombre });
    res.status(201).json({
      successful: true,
      response: `Usuario ${nombre} creado!`,
      data: allPeople,
    });
  }
});
/* app.post('/api/people', (req, res) =>{
  const { nombre } = req.body;
  console.log(req.body);
  console.log(nombre);
  if (nombre) {
    return res.status(201).json({"success": true, "response": "Usuario creado."})
  }
  res.status(404).json({"success": false, "response": "Por favor ingrese un nombre."})
}) */

app.listen(5000, () => {
  console.log("escuchando en el puerto 5000");
});
