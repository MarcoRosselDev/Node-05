//const borrar = document.querySelectorAll('.borrar');

const borrarId = async (id) => {
  try {
    const response = await fetch(`/api/v1/tasks/mongodriver`, {
      method: "DELETE",
      body: {id: id}
    })
    return response.json()
  } catch (error) {
    console.error(error)
  }
}

const borrarTarea = (btn) => {

  btn.forEach((borr) => {
    const id = borr.parentElement.parentElement.children[1].innerText;
    borr.addEventListener('click', function (ev) {
      ev.preventDefault();
      console.log('Presionase el boton borrar');
      console.log(`id: ${id} borrado`);
      borrarId(id);
    })
  })
}

export default borrarTarea;