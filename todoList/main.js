import updateTask from './taskUpdate.js'//--> asi es con javascript vanilla

const enviar = document.querySelector('.enviar');
const borrar = document.querySelectorAll('.borrar');
const editar = document.querySelectorAll('.editar');
const input = document.querySelector('input')

enviar.addEventListener('click', function (ev) {
  ev.preventDefault();
  console.log('Presionase el boton enviar');
  console.log(input.value);
})
/* ojo aqui por que el boton enviar es uno, pero borrar y editar pueden ser muchos */

borrar.forEach((borr) => {
  borr.addEventListener('click', function (ev) {
    ev.preventDefault();
    console.log('Presionase el boton borrar');
  })
})
editar.forEach((edi) => {
  edi.addEventListener('click', function (ev) {
    ev.preventDefault();
    console.log('Presionase el boton editar');
  })
})

updateTask('testing modules')
/* (function () {
"use strict";
console.log('modo estricto activado');
console.log("Hi !!!");
})() */