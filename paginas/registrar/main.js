const btnDark = document.querySelector('.btnDark');
const body = document.querySelector('body');
const header = document.querySelector('header');
const loginBtn = document.querySelector('.loginBtn');
const proyectos = document.querySelector('.proyectos');
const registrar = document.querySelector('.registrar');
// ocultar la clave con css despues
const claveUsuario = document.querySelector('.claveIpt');
const nombreUsuario = document.querySelector('.nombreIpt');

registrar.addEventListener('click', async function (e) {
  e.preventDefault();
  console.log(nombreUsuario.value);
  console.log(claveUsuario.value);
  try {
    const respuesta = await fetch('http://localhost:5000/api/v1/', {
      method: 'POST',
      body: JSON.stringify({nombre: nombreUsuario.value, clave: claveUsuario.value}),
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then(data => data.json())
    .then(a => console.log(a))
    return respuesta
  } catch (error) {
    console.error(error)
  }
})

const menuBtn = document.querySelector('.menuHiden');

menuBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const nav = this.parentElement.parentElement.parentElement.children[1];
  console.log(nav.classList);
  if (nav.classList.contains('nav-menu') === true) {
    nav.classList.remove('nav-menu');
  } else{
    nav.classList.add('nav-menu');
  }
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
