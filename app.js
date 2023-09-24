const express = require('express')
const app = express()
const port = 5000
const fs = require('fs')
const style = fs.readFileSync('./todo_list/style.css')

app.get('/', (req, res) => {
  console.log(req.url);// -->'/'
  //res.writeHead(200, 'successful', {'content-type': 'text/html'})
  res.send(`
      <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <title>To do list</title>
    </head>
    <body>
        <div class="div-list">
            <h1>TO DO LIST</h1>
            <p>write some tastk to do</p>
            <div class="input">
                <input type="text" placeholder="Write some task">
                <button>send</button>
            </div>
            <div class="tasks">
                <ul></ul>
            </div>
            <a href="http://"></a>
        </div>
        <script src="./app.js"></script>
    </body>
    </html>
  `)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})