import updateTask from './taskUpdate.js'//--> asi es con javascript vanilla

const enviar = document.querySelector('.enviar');
const borrar = document.querySelectorAll('.borrar');
const editar = document.querySelectorAll('.editar');
const input = document.querySelector('input')
const main = document.querySelector('main')

const tarea = async (data) => {
  try {
    const response = await fetch("/api/v1/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data)
    })
    .then((event) => {
      console.log(event)
      if (event.status == 201) {
        console.log(event);
        console.log('fue 201 !!!');
        main.appendChild.innerHTML += `
        <div class="lista">
          <p>${input.value}</p>
          <div class="btns">
              <button class="borrar">Borrar</button>
              <button class="editar">Editar</button>
          </div>
        </div>`
      } else {
        console.log(`status: ${event.status}`);
      }
    }) 
  } catch (error) {
    console.error(error)
  }
}

enviar.addEventListener('click', function (ev) {
  ev.preventDefault();
  console.log('Presionase el boton enviar');
  console.log(input.value);
  const body = {name: input.value}
  tarea(body);
  
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