import cargarDatos from './cargarDatos.js';
import cargarBotones from './cargarBotones.js';
import nuevaTarea from './nuevaTarea.js';

const mainElem = document.querySelector("main");
const inputMain = document.querySelector(".input-main");
const enviarBtn = document.querySelector(".enviar")

enviarBtn.addEventListener('click', function (event) {
  event.preventDefault();
  const promis = nuevaTarea(inputMain.value)
  inputMain.value = '';
  promis.then(respn => respn.json())
  .then(data =>{
    // acceso a data.name y data._id
    const div = document.createElement('div');
      div.classList.add("lista");
      div.innerHTML = `
      <p>${data.name}</p>
      <p class="">${data._id}</p>
      <div class="btns">
        <button class="borrar">Borrar</button>
        <button class="editar">Editar</button>
      </div>
      <div class="editar-div ocultar">
        <input type="text" placeholder="..." class="inputEdit">
        <button class="editarBtn">Enviar edicion</button>
      </div>
      `;
    mainElem.append(div);
    console.log(data)
  })
  .then(() => cargarBotones())
})

//primero vamos a cargar los datos de mongoDB
const loadData = cargarDatos();
loadData
  .then(data => data.json())
  .then(array => {
    // cargar datos vajo el main input
    array.forEach(element => {
      const div = document.createElement('div');
      div.classList.add("lista");
      div.innerHTML = `
      <p>${element.name}</p>
      <p class="">${element._id}</p>
      <div class="btns">
        <button class="borrar">Borrar</button>
        <button class="editar">Editar</button>
      </div>
      <div class="editar-div ocultar">
        <input type="text" placeholder="..." class="inputEdit">
        <button class="editarBtn">Enviar edicion</button>
      </div>
      `;
    mainElem.append(div);
    });
  })
  .then(()=> cargarBotones())

//ahora la funcionalidad del boton borrar tarea