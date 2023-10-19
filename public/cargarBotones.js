import borrarTask from './borrarTask.js';
import editarDato from './editarDato.js';
const mainElement = document.querySelector('main');

const cargarBotones = () => {
  //boton borrar
  const borrarBtn = document.querySelectorAll(".borrar");
  borrarBtn.forEach(btn => btn.addEventListener('click', function (event) {
    event.preventDefault();
    const id = this.parentElement.parentElement.children[1].innerText;
    //const id = this.parentElement.parentElement;
    console.log(id);
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
    event.preventDefault();
    let name = this.parentElement.parentElement.children[0];
    const id = this.parentElement.parentElement.children[1].innerText;
    const editarInput = this.parentElement.parentElement.children[3].children[0];
    const enviarEdicion = this.parentElement.parentElement.children[3].children[1];
    const ocultar = this.parentElement.parentElement.children[3];
    
    enviarEdicion.addEventListener('click', function (event) {
      event.preventDefault();
      console.log('clickeaste enviar edicion');
      let editValue = editarInput.value;
      editarDato(id, editValue);
      console.log(editValue);
      name.innerText = editarInput.value;
      editarInput.value = '';
    })

    console.log(id);
    console.log(enviarEdicion);
    console.log(editarInput);
    if (ocultar.classList.contains("ocultar") == true) {
      ocultar.classList.remove("ocultar")
    } else {
      ocultar.classList.add("ocultar")
    }
    console.log('boton editar');
    console.log('editar borrar');
  }))
}

export default cargarBotones;