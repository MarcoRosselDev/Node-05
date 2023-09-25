const express = require('express');
const app = express();

app.use(express.static('./public'));// nombrar index.html al archivo principal o no leera ningun archivo

app.get('/', (req, res)=>{
  res.status(200).send(login);
})

app.listen(5000, ()=>{
  console.log('escuchando en el puerto 5000');
})