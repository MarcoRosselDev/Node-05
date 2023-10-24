const btnDark = document.querySelector('.btnDark');
const body = document.querySelector('body');
const header = document.querySelector('header');

btnDark.addEventListener('click', function (event) {
    event.preventDefault();
    console.log('click en el boton dark mode');
    console.log(body.classList);
    if (body.classList.contains('ligth') === true) {
        body.classList.remove('ligth')
    } else{
        body.classList.add('ligth')
    }
    console.log(header.classList);
})