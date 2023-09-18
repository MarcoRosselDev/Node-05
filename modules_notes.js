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