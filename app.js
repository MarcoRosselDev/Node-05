const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/posts', (req, res)=>{
  // realizar peticion a database
  // preguntar si existe y manejar errores
  // si si o si no retornar data o error msg
  // res.send(resultado)
  res.send('resultado temporal')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})