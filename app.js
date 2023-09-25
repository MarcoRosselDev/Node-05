const express = require('express');
const app = express();
const {readFileSync} = require('fs');

const login = readFileSync('./public/login.html', 'utf-8');

app.use(express.static('./public'));

app.get('/', (req, res)=>{
  res.status(200).send(login);
})

app.listen(5000, ()=>{
  console.log('escuchando en el puerto 5000');
})