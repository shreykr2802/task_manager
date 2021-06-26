console.log('loaded');

function addList() {
    console.log('adding list');
    const error = document.getElementById('noText');
    error.innerHTML = '';
    let li = document.createElement("li");
    let taskListName = document.getElementById("taskListName").value;
    let textNode = document.createTextNode(taskListName);
    let div = document.createElement('div');
    div.className = "addTaskNameContainer";
    let inputTaskName = document.createElement('input');
    inputTaskName.placeholder = "Add Task";
    inputTaskName.style = "width: 5rem";
    inputTaskName.id = "taskName";
    let addTaskButton = document.createElement('button');
    addTaskButton.appendChild(document.createTextNode('Add'));
    addTaskButton.addEventListener("click", addTask, false);
    addTaskButton.id = "addTaskButton";
    let ul = document.createElement('ul');
    ul.id = "allTaskName";
    div.appendChild(inputTaskName);
    div.appendChild(addTaskButton);
    li.appendChild(textNode);
    li.appendChild(div);
    li.appendChild(ul);
    li.className = "toDoList";
    if (taskListName === '') {
        const errorText = document.createTextNode("Please provide a task name");
        error.appendChild(errorText);
    } else {
        document.getElementById("allTasksList").appendChild(li);
    }
    document.getElementById("taskListName").value = "";
}

function addTask() {
    console.log('adding task');
    // const error = document.getElementById('noText');
    // error.innerHTML = '';
    let li = document.createElement("li");
    let taskName = document.getElementById("taskName").value;
    let textNode = document.createTextNode(taskName);
    li.appendChild(textNode);
    if (taskName === '') {
        alert("Please provide a task name");
        // error.appendChild(errorText);
    } else {
        document.getElementById("allTaskName").appendChild(li);
    }
    document.getElementById("taskName").value = "";
}