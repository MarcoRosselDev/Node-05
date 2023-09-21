const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  const url = req.url
  if (url == "/") {
    res.statusCode = 200;
    res.end('Hello World');
  } else if (url == '/home') {
    res.statusCode = 200;
    res.end('home page');
  }
  else{
    res.statusCode = 404;
    res.end('page not found, flease back to home page');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});