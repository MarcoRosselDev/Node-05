//import actualizarTarea from './actualizarTarea.js';//--> asi es con javascript vanilla
const editarBtn = document.querySelectorAll('.editar')

editarBtn.forEach(btn =>{
  btn.addEventListener('click', function (event) {
    event.preventDefault()
    console.log("actualizar btn");
  })
})

//updateTask('testing modules')