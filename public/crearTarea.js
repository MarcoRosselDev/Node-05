const tarea = async (data) => {
  try {
    const response = await fetch("/api/v1/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data)
    })
      .then((event) => {
        if (event.status == 201) {
          console.log('fue 201 !!!');
          const newDiv = document.createElement("div");
          newDiv.classList.add('lista')
          newDiv.innerHTML = `
            <p>random text</p>
            <div class="btns">
              <button class="borrar">Borrar</button>
              <button class="editar">Editar</button>
            </div>`
          main.append(newDiv)
        } else {
          console.log(`status: ${event.status}`);
        }
      })
  } catch (error) {
    console.error(error)
  }
}

export default tarea;