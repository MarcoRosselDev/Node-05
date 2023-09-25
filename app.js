const express = require('express');
const app = express();
const logger = require('./logger.js')
const authorize = require('./authorize.js')

app.use([logger, authorize])
//app.use(logger)// <--- el orden importa, si lo posiciono en la linea 10 no se ejecutara en '/' url
// app.use('path', callback())
// si aplico un path antes del callback se aplicara a todos dentro de el rango del path, los demas seran descartados.
// estas son las dos formas de aplicar middleware a paths espesificos y en maza.

app.get('/', (req, res)=>{
  res.status(200).send(`<p>home page</p>`)
})
app.get('/users', (req, res)=>{
  res.status(200).send(`<p>${res.url}</p>`)
})
app.get('/users/id', (req, res)=>{
  res.status(200).send(`<p>${res.url}</p>`)
})
app.get('/users/id/abc', (req, res)=>{
  res.status(200).send(`<p>${res.url}</p>`)
})

app.listen(5000, ()=>{
  console.log('Escuchando en el puerto 5000');
})