const addTask = document.getElementById("add-task");
const taskContainer = document.getElementById('add-task-container');
const inputTask = document.getElementById('input-task');

addTask.addEventListener('click', function() {
    let task = document.createElement('div');
    task.classList.add('task');
    let li = document.createElement('li');
    li.innerText = inputTask.value;
    task.appendChild(li);
    inputTask.value = " ";

    let checkBtn = document.createElement("button");
    checkBtn.innerHTML = "<i class='fa-solid fa-check'></i>";
    checkBtn.classList.add('checkTask');
    task.appendChild(checkBtn);

    let delBtn = document.createElement("button");
    delBtn.innerHTML = "<i class='fa-solid fa-trash-can'></i>";
    delBtn.classList.add('deleteTask');
    task.appendChild(delBtn);

    if (inputTask.value.trim() === " ") {
        alert("Please enter a task");
    } else {
        taskContainer.appendChild(task);
    }


    inputTask.value == " ";
    checkBtn.addEventListener('click',function(){
        checkBtn.parentElement.style.textDecoration ="line-through";
    });


    delBtn.addEventListener('click',function(){
        lettarget = e.target();
        target.parentElement.parentElement.remove();

    });
});
