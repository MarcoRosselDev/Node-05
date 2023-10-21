require('dotenv').config();
const express = require('express');
require('express-async-errors');// puedo usar manejador de errores asyncrono|
const app = express();
const puerto = 5000 || process.env.PORT;
const router = require('./router/router.js');
const connectionDB = require('./db/db.js')

const notFoundMiddleware = require('./middleware/not-found.js');
const errorMiddleware = require('./middleware/error-handler.js');

//middleware
app.use(express.json())

app.use('/api/v1', router);

app.get('/', (req, res)=>{
    res.status(200).send("<h1>Hola mundo !</h1>")
})

const run = async () => {
    try {
        await connectionDB(process.env.MONGO_URL);
        //conectar con mongoDB
        app.listen(puerto, () => {
            console.log(`Escuchando en el puerto ${puerto}`);
        })
    } catch (error) {
        console.error(error);
    }
}

run()