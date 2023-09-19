/* file app.js
const {hello, subtract, add} = require('./saludos.js')
console.log(hello, subtract, add);

console.log(hello('marco'));
console.log(subtract(10, 5));
console.log(add(10, 5));
 */

/* file saludos.js 
function saludar(name) {
    return `Hola ${name}, buen dia!`;
}

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b
}

module.exports = {
    hello: saludar,
    add: sumar,
    subtract: restar
} 
*/

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


const curso = require("./curso.json")
console.log(curso);
/* {
  nombre: 'marco',
  apellido: 'rossel',
  age: 30,
  nacionalidad: 'Chileno'
} */
console.log(typeof(curso), "typeof curso"); // object

let cursoString = JSON.stringify(curso)
console.log(cursoString);
console.log(typeof(cursoString), "typeof cursoString");// string

cursoString = JSON.parse(cursoString)
console.log(typeof(cursoString), 'typeof parse');// object