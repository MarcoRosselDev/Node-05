const http = require('http');
const {readFileSync} = require('fs')

const todoListHTML = readFileSync('./todo_list/index.html')
const favicon = readFileSync('./favicon.ico')
const todoListCSS = readFileSync('./todo_list/style.css')
const todoListJS = readFileSync('./todo_list/app.js')

const server = http.createServer((req, res)=>{
  const url = req.url

  if (url === '/') {
    res.writeHead(200,{'content-type': 'text/html'})
    res.write(todoListHTML)
    res.end()
  } else if (url === '/favicon.ico') {
    res.writeHead(200,{'content-type': 'image/x-icon'})
    res.write(favicon)
    res.end()
  } else if (url === '/style.css') {
    res.writeHead(200,{'content-type': 'text/css'})
    res.write(todoListCSS)
    res.end()
  } else if (url === '/app.js') {
    res.writeHead(200, {'content-type': 'application/javascript'})
    res.write(todoListJS)
    res.end()
  } else {
    res.writeHead(404, {'content-type': 'text/html'})
    res.write(`<p>no se encontro la paguina con url:${url}<p/>
    <p>porfavor <a href="http://localhost:5000/">click</a> para regresar a la paguina principal<p/>
    `)
  }

})

server.listen(5000)