import updateTask from './taskUpdate.js'//--> asi es con javascript vanilla

const enviar = document.querySelector('.enviar');
const borrar = document.querySelector('.borrar');
const editar = document.querySelector('.editar');

enviar.addEventListener('click', function (ev) {
    ev.preventDefault();
    console.log('Presionase el boton enviar');
})
/* ojo aqui por que el boton enviar es uno, pero borrar y editar pueden ser muchos */
borrar.addEventListener('click', function (ev) {
    ev.preventDefault();
    console.log('Presionase el boton borrar');
})
editar.addEventListener('click', function (ev) {
    ev.preventDefault();
    console.log('Presionase el boton editar');
})

updateTask('testing modules')
/* (function () {
"use strict";
console.log('modo estricto activado');
console.log("Hi !!!");
})() */