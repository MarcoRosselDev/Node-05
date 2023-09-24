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
  if (singleUser == undefined) {  //-----> (!singleUser) = undefined ---> son lo mismo
    res.status(404).send(`El usuario:${userID}, no se encontro`)
  }
  res.status(200).json(singleUser)
})

// queris----search&limit---> filter, slice
app.get('/v1/search', (req, res)=>{
  console.log(req.query);
  // la documentacion de la api nos dice que querys soporta
  // para eso desestructuramos la query y preguntamos si esta presente en la peticion
  // en este caso preguntamos por un nombre que tenga x letra pasada en el query:?name=a-->filter
  // es segundo sera el limite de resultados retornados--->lim=2--->slice
  const {name, lim} = req.query;
  // como cortaremos y filtraremos los datos, realizamos una insanciacion de los datos
  let queryData = [...products]
  console.log(queryData);
  if (name) {
    queryData = queryData.filter(product => product.name.startsWith(name))
  }
  if (lim) {
    queryData = queryData.slice(0, lim)
  }
  res.status(200).send(queryData);
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