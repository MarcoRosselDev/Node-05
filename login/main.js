const btnDark = document.querySelector('.btnDark');
const body = document.querySelector('body');
const header = document.querySelector('header');
const loginBtn = document.querySelector('.loginBtn');

btnDark.addEventListener('click', function (event) {
    event.preventDefault();
    if (body.classList.contains('ligth') === true) {
        body.classList.remove('ligth')
        btnDark.textContent = 'Light mode';
        header.classList.remove('ligth-header')
    } else{
        body.classList.add('ligth')
        btnDark.textContent = 'Darck mode';
        header.classList.add('ligth-header')
    }
})

loginBtn.addEventListener('click', ()=>{
    console.log('login bnt');
})

