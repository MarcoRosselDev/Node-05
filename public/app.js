const input = document.querySelector('input');
const button = document.querySelector('button');
const tasks = document.querySelector('.tasks');

let lista = []

const createData = async (data) => {
  try {
    const response = await fetch("/api/v1/tasks/mongodriver", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    })
    .then(loadData())
    return response.json()
  } catch (error) {
    console.error(error)
  }
}

const deleteData = async (id) => {
  try {
    const response = await fetch(`/api/v1/tasks/${id}`, {
      method: "DELETE"
    })
    .then(res => console.log(res))
    return response.json();
  } catch (error) {
    console.error(error)
  } finally{
    loadData()
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
          elem += `<li>${a[i].name} <a class="hiden">${a[i]._id}</a> <button class="deleteButton">delete</button></li>`
        }
        tasks.children[0].innerHTML = elem;
      })
      .catch(error => console.error(error))

    const deleteButtons = document.querySelectorAll('.deleteButton')
    for (let i = 0; i < deleteButtons.length; i++) {
      deleteButtons[i].addEventListener('click', function (eve) {
        eve.preventDefault();
        console.log('clicked delete button');
        //console.log(this.parentNode);
        let li = this.parentNode
        //console.log(li.children[0].innerText); --> this is
        //console.log(li.children.a); --> undefined
        const id = this.parentNode.children[0].innerText;
        console.log(id);
        deleteData(id);
      })
    }
  } catch (error) {
    console.log(error);
  }
}

button.addEventListener('click', function () {
  //lista.push(input.value)
  let data = {"name": input.value}
  console.log('enviado');
  createData(data);
  input.value = '';
});


loadData();