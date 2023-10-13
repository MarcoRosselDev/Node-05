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

const loadData = async () => {
    try {
        await fetch('/api/v1/tasks/tester', {
            method: 'GET', headers: {
                'Content-Type': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
        .then(data => data.json())
        .then(a => console.log(a))
            /* let elem = '';
            // iterar por el arreglo y mostrarlo en la lista
            for (let i = 0; i < a.length; i++) {
                elem += `<li>${a[i]}</li>`
            }
            tasks.children[0].innerHTML = elem; */
        .catch(error => console.error(error))
    } catch (error) {
        console.log(error);
    }
}

loadData();