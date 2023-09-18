const fs = require('fs')
//console.log(fs);

/* fs.readFile('./fs/index.html', 'utf-8', (err, data)=>{
    if (err) {
        console.log(err);
    } else{
        console.log(data);
    }
})
 */
/* <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Title</title>
</head>
<body>
    <h1>Hola mundo</h1>
</body>
</html> */

fs.rename('./fs/main.html', './fs/index.html', (err)=>{
    if (err) {
        console.log(err);
    }
    console.log('nombre cambiado exitosamente');
})