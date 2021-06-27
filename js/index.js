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
    let textNode = document.createElement('textarea');
    textNode.setAttribute("id", Math.random() * 3267832);
    textNode.value = taskName;
    textNode.style = "padding: 0.1rem; min-width: 75%; max-width: 75%; min-height: 1.5rem; margin: 0";
    textNode.disabled = true;
    li.draggable = true;
    li.id = Math.random() * 1000;
    let edit = document.createElement('i');
    edit.className = "far fa-edit";
    edit.style = "color: orange; float: right; margin-right: 2px"
    let del = document.createElement('i');
    del.className = "far fa-trash-alt";
    del.style = "color: red;float: right;"
    li.addEventListener("dragstart", drag, false);
    li.appendChild(textNode);
    li.appendChild(del);
    li.appendChild(edit);
    li.className = "taskNameListItem";
    del.addEventListener("click", () => deleteTask(li, ulId), false);
    edit.addEventListener("click", () => editTask(textNode, edit), false);
    if (taskName === '') {
        alert("Please provide a task name");
    } else {
        document.getElementById(ulId).appendChild(li);
    }
    document.getElementById(inputId).value = "";
}

function deleteTask(taskId, listId) {
    let ul = document.getElementById(listId);
    ul.removeChild(taskId);
}

function editTask(textNode, edit) {
    if (!textNode.disabled) {
        edit.className = 'far fa-edit';
    } else {
        edit.className = 'far fa-save';
    }
    textNode.disabled = !textNode.disabled;

}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function allowDrop(ev) {
    ev.preventDefault();
}