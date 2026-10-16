
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    let li = document.createElement("li");

    let task = document.createElement("span");
    task.textContent = taskText;
    task.onclick = function () {
        completeTask(task);
    };

    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "edit-btn";
    editButton.onclick = function () {
        editTask(task);
    };

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";
    deleteButton.onclick = function () {
        deleteTask(li);
    };

    li.appendChild(task);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}

function editTask(task) {
    let newTask = prompt("Edit your task:", task.textContent);

    if (newTask !== null && newTask.trim() !== "") {
        task.textContent = newTask.trim();
    }
}

function deleteTask(task) {
    task.remove();
}

function completeTask(task) {
    task.classList.toggle("completed");
}
