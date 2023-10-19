import borrarTask from './borrarTask.js';
//import cargarDatos from './cargarDatos.js';
const mainElement = document.querySelector('main');

const cargarBotones = () => {
  //boton borrar
  const borrarBtn = document.querySelectorAll(".borrar");
  borrarBtn.forEach(btn => btn.addEventListener('click', function (event) {
    const id = this.parentElement.parentElement.children[1].innerText;
    //const id = this.parentElement.parentElement;
    console.log(id);
    event.preventDefault();
    const del = borrarTask(id);
    del .then(resp => resp.json())
      .then(()=>{
        const div = this.parentElement.parentElement;
        mainElement.removeChild(div);
      })
  }))
  
  //boton editar
  const editarBtn = document.querySelectorAll(".editar");
  editarBtn.forEach(btn => btn.addEventListener('click', function (event) {
    const id = this.parentElement.parentElement.children[1].innerText;
    const ocultar = this.parentElement.parentElement.children[3]
    if (ocultar.classList.contains("ocultar") == true) {
      ocultar.classList.remove("ocultar")
    } else {
      ocultar.classList.add("ocultar")
    }
    console.log(ocultar);
    event.preventDefault();
    console.log('editar borrar');
  }))
}

export default cargarBotones;