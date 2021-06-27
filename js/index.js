console.log('loaded');
let i = 0;
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
    inputTaskName.id = "taskName" + i;
    let ul = document.createElement('ul');
    ul.id = "allTaskName" + i;

    let addTaskButton = document.createElement('button');
    addTaskButton.appendChild(document.createTextNode('Add'));
    addTaskButton.addEventListener("click", () => addTask(inputTaskName.id, ul.id), false);
    addTaskButton.id = "addTaskButton";
    i++;
    li.addEventListener("drop", drop, false);
    li.addEventListener("dragover", allowDrop, false);
    div.className = "addTaskDiv";
    li.className = "toDoList";
    div.appendChild(inputTaskName);
    div.appendChild(addTaskButton);
    li.appendChild(textNode);
    li.appendChild(div);
    li.appendChild(ul);

    if (taskListName === '') {
        const errorText = document.createTextNode("Please provide a task List Name");
        error.appendChild(errorText);
    } else {
        document.getElementById("allTasksList").appendChild(li);
    }
    document.getElementById("taskListName").value = "";
}

function addTask(inputId, ulId) {
    let li = document.createElement("li");
    let taskName = document.getElementById(inputId).value;
    let textNode = document.createTextNode(taskName);
    textNode.style = "padding: 0.1rem";
    li.draggable = true;
    li.id = Math.random() * 1000;
    li.addEventListener("dragstart", drag, false)
    li.appendChild(textNode);
    li.className = "taskNameListItem";
    if (taskName === '') {
        alert("Please provide a task name");
    } else {
        document.getElementById(ulId).appendChild(li);
    }
    document.getElementById(inputId).value = "";
}

function drag(ev) {
    console.log("drag", ev.target)
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    console.log("drop", ev.target)
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function allowDrop(ev) {
    ev.preventDefault();
}