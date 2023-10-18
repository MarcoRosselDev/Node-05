import cargarDatos from './cargarDatos.js';

const inputMain = document.querySelector(".input-main");
const enviarBtn = document.querySelector(".enviar")

enviarBtn.addEventListener('click', function (event) {
    event.preventDefault();
    console.log(inputMain.value);
    inputMain.value = '';
})

//primero vamos a cargar los datos de mongoDB
const loadData = cargarDatos();

console.log(loadData);
loadData.then(arr => console.log(arr))