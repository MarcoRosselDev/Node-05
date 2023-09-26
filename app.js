const express = require('express');
const app = express();

app.use(express.static('./public'));// nombrar index.html al archivo principal o no leera ningun archivo
app.use(express.urlencoded({extended: false}));// nesecario para codificar el body de el request
// ahora podemos ver req.body---> {clave:valor}<---from Payload From Data

app.get('/', (req, res)=>{
  res.status(200).send(login);
})

app.post('/login', (req, res)=>{
  console.log(req.body);
  res.status(200).send('LOGIN SUCCESSFUL')
})

app.listen(5000, ()=>{
  console.log('escuchando en el puerto 5000');
})