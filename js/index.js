console.log('loaded');

function addTask() {
    console.log('adding task');
    var li = document.createElement("li");
    var taskName = document.getElementById("taskName").value;
    var textNode = document.createTextNode(taskName);
    li.appendChild(textNode);
    if (taskName === '') {
        alert("Please provide a task name");
    } else {
        document.getElementById("allTasks").appendChild(li);
    }
    document.getElementById("taskName").value = "";
}