const express = require('express');
const {people} = require('../data.js')

const router = express.Router();

router.get('/', (req, res)=>{
    res.status(200).json({
      "success": true,
      "data": people})
  })
  
router.get('/:id', (req, res)=>{
  const {id} = req.params;
  if (id) {
    const found = people.find(person => person.id === Number(id))
    if (found) {
      return res.status(200).json({"data": found})
    } else {
      return res.status(404).json({"data": `No se encontro un usuario con el id:${id}` })
    }
  }
  res.status(200).json({
    "success": true,
    "data": people})
})
  
router.post('/', (req, res)=>{
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

module.exports.person = router;