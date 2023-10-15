import updateTask from './taskUpdate.js';//--> asi es con javascript vanilla
import crearTarea from './crearTarea.js';
import cargarTareas from './cargarTareas.js';

const enviar = document.querySelector('.enviar');
const input = document.querySelector('input');

const a = cargarTareas();
a.then((status) => {
  if (status) {
    console.log("cargar botones");
    const btnBorrar = document.querySelectorAll(".borrar")
    const id = btnBorrar.parentElement.parentElement.children[1].innerText;
    btnBorrar.forEach(event => {
      event.preventDefault();
      console.log("click borrar btn");
      console.log(`id: ${id}`);
    })
  }
})

enviar.addEventListener('click', function (ev) {
  ev.preventDefault();
  const body = { name: input.value }
  crearTarea(body);
  input.value = '';
})

//updateTask('testing modules')