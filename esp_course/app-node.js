/* const http = require('http')
const cursos = require('./cursos.json')

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res)=>{

  if (req.url == '/') {
    res.statusCode=200;
    res.end('Bienvenido a mi primer API con Node js');
  } else if (req.url == '/cursos') {
    res.statusCode = 200;
    res.end(JSON.stringify(cursos))
  } else if (req.url == '/cursos/matematicas'){
    res.statusCode = 200;
    res.end(JSON.stringify(cursos['mates']))
  } else if (req.url == '/cursos/programacion'){
    res.statusCode = 200;
    res.end(JSON.stringify(cursos['programacion']))
  } else {
    res.statusCode = 404;
    res.end('path no encontrado madafaka')
  }
})

server.listen(port, hostname, ()=>{
  console.log(`Servidor escuchando en el puerto http://${hostname}:${port}/`);
}) */