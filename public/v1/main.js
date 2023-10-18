import actualizarTarea from './actualizarTarea.js';//--> asi es con javascript vanilla
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
      console.log(btn.parentElement.parentElement.children[1].innerText);
      btn.addEventListener('click', function (ev) {
        ev.preventDefault();
        console.log("click borrar btn");
        console.log(`id: ${id}`);
        const d = borrarId(id);
        d.then(e => e.json()).then(a => console.log(a))
        //console.log(this.parentElement.parentElement.classList.add("hiden"));
        this.parentElement.parentElement.classList.add("hiden");
      })
    })

    const btnActualizar = document.querySelectorAll(".editar");

    btnActualizar.forEach(btn =>{
      const id = btn.parentElement.parentElement.children[1].innerText;
      btn.addEventListener('click', function (ev) {
        ev.preventDefault();
        console.log("actualizar btn");
        //console.log(this.parentElement.parentElement.children[3].classList);
        let div = this.parentElement.parentElement.children[3].classList;
        
        if (div.contains('ocultar') == true) {
          div.remove('ocultar')
        } else{
          div.add('ocultar')
        }
        //const act = actualizarTarea(id, input.value);
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