const fs = require('fs')
/* Leer un archivo

fs.readFile('./fs/index.html', 'utf-8', (err, data)=>{
    if (err) {
        console.log(err);
    } else{
        console.log(data);
    }
})
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Title</title>
</head>
<body>
    <h1>Hola mundo</h1>
</body>
</html>
*/

/* cambiar el nombre de un archivo
fs.rename('./fs/main.html', './fs/index.html', (err)=>{
    if (err) {
        console.log(err);
    }
    console.log('nombre cambiado exitosamente');
})  */

//Eliminar un archivo 
fs.unlink('./fs/index.html', (err)=>{
    if(err){
        throw err; // ---> "lanzar"
    }
    console.log("Archivo eliminado.");
}) 