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
      .then(a => {
        let elem = '';
        // iterar por el arreglo y mostrarlo en la lista
        for (let i = 0; i < a.length; i++) {
          elem += `<li>${a[i].name} <button class="deleteButton">delete</button></li>`
        }
        tasks.children[0].innerHTML = elem;
      })
      .catch(error => console.error(error))

    const deleteButtons = document.querySelectorAll('.deleteButton')
    for (let i = 0; i < deleteButtons.length; i++) {
      deleteButtons[i].addEventListener('click', function (eve) {
        eve.preventDefault();
        console.log('clicked delete button');
      })
    }
    /* deleteButton.addEventListener("click", function (event) {
        event.preventDefault();
        console.log("You're clicked delete button");
    }) */
  } catch (error) {
    console.log(error);
  }
}

loadData();