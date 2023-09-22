const http = require('http');

const server = http.createServer((req, res)=>{
  console.log('Hello word');// en consola de node
  const url = req.url
  console.log(url); // --->"/"
  const method = req.method
  console.log(method); // GET
  res.writeHead(
    200,          // status code
    {'contant-type': 'text/html'}// 'text/plane' ---> ojo
    )
  res.write(
    `<h1>Home page</h1>
    <p>porfavor <a href="http://localhost:3000/home">click</a> para var mas</p>`
  )
  res.end()
})

server.listen(5000)