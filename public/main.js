import updateTask from './taskUpdate.js';//--> asi es con javascript vanilla
import tarea from './taskUpdate.js';
import cargarTareas from './cargarTareas.js';

const enviar = document.querySelector('.enviar');
const input = document.querySelector('input');

cargarTareas()

enviar.addEventListener('click', function (ev) {
  ev.preventDefault();
  console.log('Presionase el boton enviar');
  console.log(input.value);
  const body = { name: input.value }
  tarea(body);

})
/* ojo aqui por que el boton enviar es uno, pero borrar y editar pueden ser muchos */

//escuchar todos los botones de eliminar y editar
const borrar = document.querySelectorAll('.borrar');
const editar = document.querySelectorAll('.editar');


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