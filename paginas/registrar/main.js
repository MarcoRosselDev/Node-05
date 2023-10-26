const btnDark = document.querySelector('.btnDark');
const body = document.querySelector('body');
const header = document.querySelector('header');
const loginBtn = document.querySelector('.loginBtn');
const proyectos = document.querySelector('.proyectos');

const menuBtn = document.querySelector('.burgerMenu');

menuBtn.addEventListener('click', (e)=>{
  e.preventDefault();
  console.log('menu btn');
  console.log('mostrar lista desplegable'); 
})

btnDark.addEventListener('click', function (event) {
  event.preventDefault();
  if (body.classList.contains('ligth') === true) {
    body.classList.remove('ligth')
    btnDark.textContent = 'Light mode';
    header.classList.remove('ligth-header')
  } else {
    body.classList.add('ligth')
    btnDark.textContent = 'Darck mode';
    header.classList.add('ligth-header')
  }
})

loginBtn.addEventListener('click', () => {
  console.log('login bnt');
})
