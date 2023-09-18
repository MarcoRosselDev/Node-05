//console.log(process);
const { log } = require('console');
const os = require('os');
console.log(os.type());// Windows_NT
console.log(os.homedir());// C:\Users\andre

// setTimeout(funcion, tiempo, argumento);
// tiempo--> en milisegundos ---> 1s = 1000ms
// argumento--> si la funcion requiere arg aqui van desp de los ms

// setImmediate(funcion, argumento)
// se ejecuta cuando terminan de ejecutarse todo el codigo sincrono
// tiene la maxima prioridad dentro de los eventos pendientes
// asi que si o si se ejecuta despues pero de los primeros

// setInterval(funcion, intervalo, argumento)
// es com setTimeout y un bucle, el intervalo es en milisegundo tmbn
