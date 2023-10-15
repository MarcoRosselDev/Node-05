import updateTask from './taskUpdate.js';//--> asi es con javascript vanilla
import crearTarea from './crearTarea.js';
import cargarTareas from './cargarTareas.js';

const enviar = document.querySelector('.enviar');
const input = document.querySelector('input');

const a = cargarTareas();
a.then(c => console.log(c))

enviar.addEventListener('click', function (ev) {
  ev.preventDefault();
  const body = { name: input.value }
  crearTarea(body);
  input.value = '';
})

//updateTask('testing modules')