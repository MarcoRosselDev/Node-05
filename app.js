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
  const resultado = cursos.programacion.filter(e => e.curso === lenguaje)

  if (resultado.length === 0) {
    res.status(404).send(`No se encontraron cursos de ${param}`)
  }
  // prosesar si escribimos asdfaskdfja en :lenguaje
  res.status(200).send(JSON.stringify(resultado))
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})