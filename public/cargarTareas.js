const main = document.querySelector('main');
import borrarTarea from './borrarTarea.js';

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
          const id = data._id;
          // crear un div y agregarlo al final
          const newDiv = document.createElement("div");
          newDiv.classList.add('lista')
          newDiv.innerHTML = `
            <p>${name}</p>
            <p>${id}</p>
            <div class="btns">
              <button class="borrar">Borrar</button>
              <button class="editar">Editar</button>
            </div>`
          main.append(newDiv);
          // class="hiden" --> para ocultar p id despues
        }
        )
      })
      .then(() => {
        const editar = document.querySelectorAll('.editar');
        const borrar = document.querySelectorAll('.borrar'); // btn borrar

        const b = borrarTarea(borrar);
        console.log(b);
        if (b) {
          console.log('quiter div del dom');
        }

        editar.forEach((edi) => {
          edi.addEventListener('click', function (ev) {
            ev.preventDefault();
            console.log('Presionase el boton editar');
          })
        })
      })
  } catch (error) {
    console.error(error)
  }
}

export default cargarTareas;