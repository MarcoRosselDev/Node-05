//import actualizarTarea from './actualizarTarea.js';//--> asi es con javascript vanilla
const editarBtn = document.querySelectorAll('.editar')
const borrarBtn = document.querySelectorAll('.borrar')
const mainElem = document.querySelector("main");

console.log(mainElem.append());

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

borrarBtn.forEach(btn => {
  btn.addEventListener('click', function (event) {
    event.preventDefault();
    const div = this.parentElement.parentElement
    console.log(div);
    mainElem.removeChild(div);
  })
})

console.log('testing');

//updateTask('testing modules')