const main = document.querySelector('main');
import borrarId from './borrarTarea.js';

const cargarTareas = async () => {
  try {
    const response = await fetch("/api/v1/tasks/tester", {
      method: 'GET', headers: {
        'Content-Type': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then(data => data.json())
      .then(task => {
        task.forEach((data) => {
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
            </div>
            <div class="editar-div ocultar">
              <input type="text" placeholder="..." class="inputEdit">
              <button class="editarBtn">Enviar edicion</button>
            </div>`
            // class="hiden" --> para ocultar p id despues
          main.append(newDiv)}
          )
      })
    return true;
  } catch (error) {
    console.error(error)
  }
}

export default cargarTareas;