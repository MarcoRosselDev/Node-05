//import actualizarTarea from './actualizarTarea.js';//--> asi es con javascript vanilla
const editarBtn = document.querySelectorAll('.editar')

editarBtn.forEach(btn =>{
  btn.addEventListener('click', function (event) {
    event.preventDefault()
    console.log("actualizar btn");
    console.log(this.parentElement.parentElement.children[2].classList);
    let div = this.parentElement.parentElement.children[2].classList;
    
    if (div.contains('ocultar') == true) {
      div.remove('ocultar')
    } else{
      div.add('ocultar')
    }
  })
})

console.log('testing');

//updateTask('testing modules')