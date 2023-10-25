const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.post('/token', (req, res) => {
  const token = null
  res.status(201).json({ 'token': token })
})

app.get('/public', (req, res) => {
  res.status(200).json({ 'data': 'data publica' })
})

app.get('/privado', (req, res) => {
  try {
    res.status(200).json({'data': 'data privada'})
  } catch (error) {
    res.status(401).json({'error': error})
  }
})

app.listen(3000, () => {
  console.log('escuchando en el puerto 3000');
})