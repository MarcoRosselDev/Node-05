const borrar = document.querySelectorAll('.borrar');

const borrarTarea = async () => {

  borrar.forEach((borr) => {
    /* console.log(borr.parentElement.parentElement.children[1].innerText, "1");
    console.log(borr.parentNode.parentElement.children, "2");
    console.log(borr.parentElement.id , "3"); */
    
    const id = borr.parentElement.parentElement.children[1].innerText;
    borr.addEventListener('click', function (ev) {
      ev.preventDefault();
      console.log('Presionase el boton borrar');
      console.log(`id: ${id}`);
    })
  })
}

export default borrarTarea;