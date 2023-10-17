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
        <div class="btns">
          <button class="borrar">Borrar</button>
          <button class="editar">Editar</button>
        </div>`;
      main.appendChild(newDiv);
      })
  } catch (error) {
    console.error(error)
  }
}

export default crearTarea;