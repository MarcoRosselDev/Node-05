require('dotenv').config();
const express = require('express');
const app = express();
const puerto = 5000 || process.env.PORT;

app.get('/', (req, res)=>{
    res.status(200).send("<h1>Hola mundo !</h1>")
})

const run = () => {
    try {
        //conectar con mongoDB
        app.listen(puerto, () => {
            console.log(`Escuchando en el puerto ${puerto}`);
        })
    } catch (error) {
        console.error(error);
    }
}

run()