const main = document.querySelector('main');

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
          // crear un div y agregarlo al final
          const newDiv = document.createElement("div");
          newDiv.classList.add('lista')
          newDiv.innerHTML = `
            <p>${name}</p>
            <div class="btns">
              <button class="borrar">Borrar</button>
              <button class="editar">Editar</button>
            </div>`
          main.append(newDiv);
        }
        )
      })
      .then(()=>{
        const borrar = document.querySelectorAll('.borrar');
        const editar = document.querySelectorAll('.editar');

        borrar.forEach((borr) => {
          borr.addEventListener('click', function (ev) {
            ev.preventDefault();
            console.log('Presionase el boton borrar');
          })
        })
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