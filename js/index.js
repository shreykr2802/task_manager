console.log('loaded');

function addTask() {
    console.log('adding task');
    var li = document.createElement("li");
    var taskName = document.getElementById("taskName").value;
    var textNode = document.createTextNode(taskName);
    li.appendChild(textNode);
    if (taskName === '') {
        alert("You must write something!");
    } else {
        document.getElementById("allTasks").appendChild(li);
    }
    document.getElementById("taskName").value = "";

    var span = document.createElement("span");
    var txt = document.createTextNode("");
}