const express = require('express')
const app = express()
const port = 5000
const path = require('path')
const {products} = require('./data')

app.use(express.static('./public')) // realmente poderozo, por que con node tendriamos que realizar 3000 respuestas si tubiesemos 3000 ptericiones de imagenes y recursos

app.get('/', (req, res) => {
  console.log(req.url);// -->'/'
  //res.writeHead(200, 'successful', {'content-type': 'text/html'})
  res.status(200).sendFile(path.resolve(__dirname, './todo_list/index.html'))
})

app.get('/json', (req, res)=>{
  res.json(products)// api res--->json data send
})

app.all('*', (req, res) => {
  res.status(404).send('<h1>no se encontro la paguina<h1/>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// app.metodos mas comunes
// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen