const express = require('express');
const app = express();

const loger = (req, res, next) =>{
  const url = req.url;
  const method = req.method;
  console.log(url, method, `<--- from ${url} url'`);
  next(); // <-- clave, si no lo aplico no se puede seguir enviando recursos
  // middleware, super poderoso para cualquier algorithmo entre peticiones
  // y para no repetir el codigo
}

app.get('/', loger, (req, res)=>{
  res.status(200).send(`<p>home page</p>`)
})
app.get('/users', loger, (req, res)=>{
  res.status(200).send(`<p>some users back</p>`)
})

app.listen(5000, ()=>{
  console.log('Escuchando en el puerto 5000');
})