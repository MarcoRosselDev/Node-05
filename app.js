const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cursos = require('./cursos.json')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/cursos', (req, res)=>{
  res.status(200).send(JSON.stringify(cursos))
})

app.get('/cursos/programacion', (req, res) =>{
  res.status(200).send(JSON.stringify(cursos.programacion))
})

app.get('/cursos/matematicas', (req, res) =>{
  res.status(200).send(JSON.stringify(cursos.mates))
})

app.get('/cursos/programacion/:lenguaje', (req, res) =>{
  const lenguaje = req.params.lenguaje;
  const resultado = cursos.programacion.filter(arr => arr.curso === lenguaje)

  if (resultado.length === 0) {
    res.status(404).send(`No se encontraron cursos de ${lenguaje}`)
  }
  // prosesar si escribimos asdfaskdfja en :lenguaje
  res.status(200).send(JSON.stringify(resultado))
})

app.get('/cursos/matematicas/:materia', (req, res) => {
  const materia = req.params.materia
  const resultado = cursos.mates.filter(arr => arr.curso === materia)

  if (resultado === 0) {
    res.status(404).send(`No se encontraron cursos de ${materia}`)
  }
  res.status(200).send(JSON.stringify(resultado))
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})