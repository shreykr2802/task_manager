function clearErrorText() {
    const error = document.getElementById('noText');
    error.innerHTML = '';
}

function addTaskList(taskListName, li, parentId) {
    if (taskListName.value === '') {
        const error = document.getElementById('noText');
        const errorText = document.createTextNode("Please provide a Name");
        error.appendChild(errorText);
    } else {
        document.getElementById(parentId).appendChild(li);
        taskListName.value = "";
    }
}

function createAddTaskDiv(ul) {
    const div = document.createElement('div');
    div.className = "addTaskNameContainer";
    const inputTaskName = document.createElement('input');
    inputTaskName.placeholder = "Add Task";
    inputTaskName.id = "taskName" + Math.random() * 2389239;
    const addTaskButton = document.createElement('button');
    addTaskButton.appendChild(document.createTextNode('Add'));
    addTaskButton.addEventListener("click", () => addTask(inputTaskName, ul.id), false);
    addTaskButton.id = "addTaskButton";
    div.appendChild(inputTaskName);
    div.appendChild(addTaskButton);
    return div;
}

function createTitleDiv(textNode, li) {
    const del = createDeleteButton(li);
    const titlediv = document.createElement('div');
    titlediv.style = "width: 100%; padding: 0.1rem"
    titlediv.appendChild(textNode);
    titlediv.appendChild(del);
    return titlediv;
}

function addList() {
    clearErrorText();
    const li = document.createElement("li");
    const taskListName = document.getElementById("taskListName");
    const textNode = document.createTextNode(taskListName.value.toUpperCase());
    const ul = document.createElement('ul');
    ul.id = "allTaskName" + Math.random() * 327382739;
    const div = createAddTaskDiv(ul);
    li.addEventListener("drop", drop, false);
    li.addEventListener("dragover", allowDrop, false);
    div.className = "addTaskDiv";
    li.className = "toDoList";
    const titleDiv = createTitleDiv(textNode, li);
    li.appendChild(titleDiv);
    li.appendChild(div);
    li.appendChild(ul);
    addTaskList(taskListName, li, "allTasksList");
}

function createEditButton(textNode) {
    const edit = document.createElement('i');
    edit.className = "far fa-edit";
    edit.style = "color: orange; float: right; margin-right: 2px";
    edit.addEventListener("click", () => editTask(textNode, edit), false);
    return edit;
}

function createDeleteButton(li) {
    const del = document.createElement('i');
    del.className = "far fa-trash-alt";
    del.style = "color: red;float: right;"
    del.addEventListener("click", () => deleteTask(li), false);
    return del;
}

function createTextArea(inputName) {
    const taskName = inputName.value;
    const textArea = document.createElement('textarea');
    textArea.setAttribute("id", Math.random() * 3267832);
    textArea.value = taskName;
    textArea.style = "padding: 0.1rem; min-width: 75%; max-width: 75%; min-height: 1.5rem; margin: 0";
    textArea.disabled = true;
    return textArea;
}

function addTask(inputName, ulId) {
    clearErrorText();
    const li = document.createElement("li");
    li.draggable = true;
    li.id = Math.random() * 1000;
    const textNode = createTextArea(inputName);
    const edit = createEditButton(textNode);
    const del = createDeleteButton(li);
    li.addEventListener("dragstart", drag, false);
    li.appendChild(textNode);
    li.appendChild(del);
    li.appendChild(edit);
    li.className = "taskNameListItem";
    addTaskList(inputName, li, ulId);
    inputName.value = "";
}

function deleteTask(taskId) {
    let ul = taskId.parentNode;
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