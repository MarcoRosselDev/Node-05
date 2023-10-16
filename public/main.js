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
      const name = btn.parentElement.parentElement.children[0].innerText;
      console.log(btn.parentElement.parentElement.children[0].innerText);
      btn.addEventListener('click', function (ev) {
        ev.preventDefault();
        console.log("click borrar btn");
        console.log(`name: ${name}`);
        const d = borrarId(name);
        d.then(e => console.log(e));
        //console.log(this.parentElement.parentElement.classList.add("hiden"));
        //this.parentElement.parentElement.classList.add("hiden");
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