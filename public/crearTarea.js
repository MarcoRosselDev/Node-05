const main = document.querySelector('main');

const crearTarea = async (data) => {
  try {
    const response = await fetch("/api/v1/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data)
    })
    .then(e => e.json())
    .then((event) => {
      console.log(event);
      const newDiv = document.createElement("div");
      newDiv.classList.add('lista')
      newDiv.innerHTML = `
        <p>${event.name}</p>
        <p>${event.id}</p>
        <div class="btns">
          <button class="borrar">Borrar</button>
          <button class="editar">Editar</button>
        </div>
        <div class="editar-div ocultar">
          <input type="text" placeholder="..." class="inputEdit">
          <button class="editarBtn">Enviar edicion</button>
        </div>
        `
      main.appendChild(newDiv);
      })
    .then(() => {
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
    })
  } catch (error) {
    console.error(error)
  }
}

export default crearTarea;