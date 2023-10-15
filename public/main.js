import updateTask from './taskUpdate.js';//--> asi es con javascript vanilla
import crearTarea from './crearTarea.js';
import cargarTareas from './cargarTareas.js';
import borrarId from './borrarTarea.js'

const enviar = document.querySelector('.enviar');
const input = document.querySelector('input');

const a = cargarTareas();
a.then((status) => {
  if (status) {
    console.log("cargar botones");
    const btnBorrar = document.querySelectorAll(".borrar")
    
    btnBorrar.forEach(btn => {
      const id = btn.parentElement.parentElement.children[1].innerText;
      btn.addEventListener('click', function (ev) {
        ev.preventDefault();
        console.log("click borrar btn");
        console.log(`id: ${id}`);
        const br = borrarId(id);
        br.then(resp => console.log(resp))
        console.log(this.parentElement.parentElement.classList.add("hiden"));
        this.parentElement.parentElement.classList.add("hiden");
      })
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