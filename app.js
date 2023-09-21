/* output ---> no sabemos cual leera primero por que synchronous 
text two to read synchronous
text one to read */

const {readFile} = require('fs');
const { resolve } = require('path');
// console.log(readFile);

/* const reader = async (path)=>{
  await readFile(path, 'utf-8',(err, data)=>{
    if (err) {
      console.log(err);
      return console.log(`error: ${err}`);
    } else {
      console.log(data);
      return data
    }
  })
} */

const promesa = new Promise((res, rej)=>{
  path = './text1.txt'
  if (true) {
    res(
      readFile(path, 'utf-8',(err, data)=>{
        if (err) {
          console.log(err);
          return console.log(`error: ${err}`);
        } else {
          console.log(data);
          return data
        }
      })
    )
  }
  rej("no se puedo ejecutar")
})

const first = './text1.txt'
const second = './text2.txt'
/* reader(first)
reader(second) */
promesa.then().catch()


























/* const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  //res.setHeader('Content-Type', 'text/plain'); ---> todo lo que se envie sara texto plano. ojo..>
  const url = req.url
  if (url == "/") {
    res.statusCode = 200;
    res.end('Hello World');
  } else if (url == '/home') {
    res.statusCode = 200;
    res.end('home page');
  }
  else{
    //res.end('page not found, flease back to home page');
    res.end(
      '<h1>Pagina no encontrada</h1><p>porfavor <a href="http://localhost:3000/home">click</a> para regrasar a home page</p>'
    );
    res.statusCode = 404;
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); */