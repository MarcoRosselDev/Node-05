const loadBtns = () => {
  const borrarBtn = document.querySelectorAll(".borrar");
  borrarBtn.forEach(btn => btn.addEventListener('click', function (event) {
    event.preventDefault();
    console.log('boton borrar');
  }))
  const editarBtn = document.querySelectorAll(".editar");
  editarBtn.forEach(btn => btn.addEventListener('click', function (event) {
    event.preventDefault();
    console.log('editar borrar');
  }))
}

export default loadBtns;