const express = require('express')
const app = express()
const port = 5000
const path = require('path')
const {products, people} = require('./data')

app.use(express.static('./public')) // realmente poderozo, por que con node tendriamos que realizar 3000 respuestas si tubiesemos 3000 ptericiones de imagenes y recursos

// get url '/'
app.get('/', (req, res) => {
  console.log(req.url);// -->'/'
  //res.writeHead(200, 'successful', {'content-type': 'text/html'})--> codigo de node vanilla
  res.status(200).sendFile(path.resolve(__dirname, './todo_list/index.html')) // --> express
})

// send a json object
app.get('/users', (req, res)=>{
  res.json(people)// api res--->json data send
})

// get un item de una json object
app.get('/users/:userID', (req, res)=>{
  const {userID} = req.params; // <----- es type string
  const singleUser = people.find(user => user.id === Number(userID));
  if (singleUser == undefined) {
    res.status(404).send(`El usuario:${userID}, no se encontro`)
  }
  res.status(200).json(singleUser)
})


// para todos los demas url, send 404, y msj not found
app.all('*', (req, res) => {
  res.status(404).send('<h1>no se encontro la paguina<h1/>')
})

// puerto de escucha
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