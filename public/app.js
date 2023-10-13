const input = document.querySelector('input');
const button = document.querySelector('button');
const tasks = document.querySelector('.tasks');

let lista = []

button.addEventListener('click', function () {
  //lista.push(input.value)
  let data = {"name": input.value}
  console.log('enviado');
  createData(data);
  loadData()
  input.value = '';
});

const createData = async (data) => {
  try {
    const response = await fetch("/api/v1/tasks/mongodriver", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    })
    return response.json()
  } catch (error) {
    console.error(error)
  }
}

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
        /* let data = {'name': input.value}
        createData(data) */
      })
    }
  } catch (error) {
    console.log(error);
  }
}

loadData();