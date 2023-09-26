const express = require('express');
const {people, products} = require('./data.js')

const app = express();
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get('/', (req, res)=>{
  res.status(200).json({
    "success": true,
    "data": people})
})

app.post('/', (req, res)=>{
  const {nombre} = req.body;
  if (nombre) {
    const newPeople = [...people];
    let id = newPeople.length + 1;
    newPeople.push({
      "id": id,
      "name": nombre
    })
    return res.status(201).json({
      "success": true,
      "data": newPeople
    })
  } else {
    res.status(404).send('por favor incluye un nombre en el cuerpo de la peticion.')
  }
})

app.listen(5000, ()=>{
  console.log('Escuchando en el puerto 5000');
})