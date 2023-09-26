const express = require('express');
const app = express();
const {people} = require('./data.js')

app.use(express.static('./public'));// nombrar index.html al archivo principal o no leera ningun archivo
app.use(express.urlencoded({extended: false}));// nesecario para codificar el body de el request
// ahora podemos ver req.body---> {clave:valor}<---from Payload From Data

app.get('/', (req, res)=>{
  res.status(200).send(login);
})

app.post('/login', (req, res)=>{
  const {user} = req.body;
  if (user) {
    return res.status(200).send(`welcome ${user}.`);
  }
  res.status(404).send('por favor ingresa un usuario')
})

app.get('/api/people', (req, res)=>{
  res.status(200).json(people)
})

app.post('/api/people', (req, res) =>{
  const {name} = req.body;
  console.log(req.body);
  console.log(name);
  if (!name) {
    return res.status(404).json({"success": false, "response": "Por favor ingrese un nombre."})
  }
  res.status(201).json({"success": true, "response": "Usuario creado."})
})

app.listen(5000, ()=>{
  console.log('escuchando en el puerto 5000');
})