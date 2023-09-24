const express = require('express')
const app = express()
const port = 5000
const path = require('path')

app.use(express.static('./public'))

app.get('/', (req, res) => {
  console.log(req.url);// -->'/'
  //res.writeHead(200, 'successful', {'content-type': 'text/html'})
  res.status(200).sendFile(path.resolve(__dirname, './todo_list/index.html'))
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