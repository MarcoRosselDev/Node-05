const express = require('express');
const jwt = require('jsonwebtoken');

require('dotenv').config();
const SECRET = process.env.SECRET;

const app = express();

app.post('/token', (req, res) => {
  // usuario se deve obtener de la db
  // conectar con mongodb y match estos valores
  // const email = db.find();
  const nombre = 'marco';
  const {id:sub} = '123asdfa1'; // renombramiento
  //----------------------------------
  const token = jwt.sign({
    sub,
    nombre,
    exp: Date.now() + 60 * 1000 *5 // = 1 minuto (trabajamos con milisegundos)
  }, SECRET)
  res.status(201).json({ 'token': token })
})

app.get('/public', (req, res) => {
  res.status(200).json({ 'data': 'data publica' })
})

app.get('/privado', (req, res) => {
  try {
    // Bearer asldkfjalskdjf123...
    // para sacar ese espacio y querarnos solo con el token text ===
    const token = req.headers.authorization.split(' ')[1];
    // para accesder al payload del token usamos la utilidad de jwt.verify()
    const payload = jwt.verify(token, SECRET)

    if (Date.now() > payload.exp) {
      return res.status(401).send({error: 'token expirado!'})
    }
    // else res data privada
    res.status(200).json({'data': 'data privada'})
  } catch (error) {
    res.status(401).json({err: error})
  }
})

app.listen(3000, () => {
  console.log('escuchando en el puerto 3000');
})