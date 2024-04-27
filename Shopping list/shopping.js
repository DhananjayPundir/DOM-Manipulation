let input = document.querySelector('#enter');
let btn = document.querySelector('#add');
let ul = document.querySelector('#task-list');

btn.addEventListener('click', function() {
    let li = document.createElement('li');
    li.classList.add('task');

    let taskText = document.createElement('span');
    taskText.classList.add('task-text');
    taskText.textContent = input.value.trim();
    li.appendChild(taskText);

    let delBtn = document.createElement('button');
    delBtn.classList.add('delete-btn');
    delBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    delBtn.addEventListener('click', function() {
        li.remove();
    });
    li.appendChild(delBtn);

    ul.appendChild(li);
    input.value = '';
});

