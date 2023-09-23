const input = document.querySelector('input');
const button = document.querySelector('button');
const tasks = document.querySelector('.tasks');

let lista = []

button.addEventListener('click', function () {
    lista.push(input.value)
    let printDom = ''
    for (let i = 0; i < lista.length; i++) {
        printDom += `<li>${lista[i]}</li>`;
    }
    tasks.children[0].innerHTML = printDom;
    input.value = '';
});
