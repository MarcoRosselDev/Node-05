const express = require('express')
const app = express()
const port = 3000
const cursos = require('./cursos.json')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/cursos', (req, res)=>{
  res.send(JSON.stringify(cursos))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})