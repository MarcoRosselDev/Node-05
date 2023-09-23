const input = document.querySelector('input');
const button = document.querySelector('button');
const tasks = document.querySelector('.tasks');

button.addEventListener('click', function () {
    console.log(input.value);
    tasks.innerHTML = `<p>${input.value}</p>`;
});
