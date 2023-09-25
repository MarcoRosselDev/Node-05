const express = require('express');
const app = express();

app.get('/', (req, res)=>{
  res.status(200).send(`<p>home page</p>`)
})

app.listen(5000, ()=>{
  console.log('Escuchando en el puerto 5000');
})