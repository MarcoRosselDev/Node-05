require('dotenv').config();
require('express-async-errors');// puedo usar manejador de errores asyncrono|
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET; 
const express = require('express');
const app = express();
const puerto = 5000 || process.env.PORT;
const router = require('./router/router.js');
const connectionDB = require('./db/db.js')

const notFoundMiddleware = require('./middleware/not-found.js');
const errorMiddleware = require('./middleware/error-handler.js');

app.use(express.urlencoded({ extended: false }));
//middleware
app.use(express.static('./public'));
app.use('/login', express.static('./paginas/login'));
app.use('/registrar', express.static('./paginas/registrar'));
app.use(express.json())

app.use('/api/v1', router);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const run = async () => {
  try {
    await connectionDB(process.env.MONGO_URL);
    app.listen(puerto, () => console.log(`Escuchando en el puerto ${puerto}`))
  } catch (error) {
    console.error(error);
  }
}

run()