import updateTask from './taskUpdate.js';//--> asi es con javascript vanilla

const enviar = document.querySelector('.enviar');
const input = document.querySelector('input');
const main = document.querySelector('main');

/* const newDiv = document.createElement("div");
newDiv.classList.add('lista')
newDiv.innerHTML = `<p>random text</p>
<div class="btns">
    <button class="borrar">Borrar</button>
    <button class="editar">Editar</button>
</div>`
console.log(newDiv);

main.append(newDiv) */

const cargarTareas = async () => {
  try {
    const response = await fetch("/api/v1/tasks/mongodriver", {
      method: 'GET', headers: {
        'Content-Type': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
    .then(data => data.json())
    .then((event) => {
      event.forEach((data) => {
        const name = data.name
        // crear un div y agregarlo al final
        const newDiv = document.createElement("div");
          newDiv.classList.add('lista')
          newDiv.innerHTML = `
          <p>${name}</p>
          <div class="btns">
            <button class="borrar">Borrar</button>
            <button class="editar">Editar</button>
          </div>`
          main.append(newDiv);
      }
      )
    })
  } catch (error) {
    console.error(error)
  }
}

cargarTareas()

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
        if (event.status == 201) {
          console.log('fue 201 !!!');
          const newDiv = document.createElement("div");
          newDiv.classList.add('lista')
          newDiv.innerHTML = `
          <p>random text</p>
          <div class="btns">
            <button class="borrar">Borrar</button>
            <button class="editar">Editar</button>
          </div>`
          main.append(newDiv)
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
  const body = { name: input.value }
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

//escuchar todos los botones de eliminar y editar
const borrar = document.querySelectorAll('.borrar');
const editar = document.querySelectorAll('.editar');

borrar.forEach(btn => btn.addEventListener("click", function (eve) {
  eve.preventDefault();
  console.log("borrar btn");
}));
editar.forEach(btn => btn.addEventListener("click", function (eve) {
  eve.preventDefault();
  console.log("editar btn");
}));

updateTask('testing modules')
/* (function () {
"use strict";
console.log('modo estricto activado');
console.log("Hi !!!");
})() */