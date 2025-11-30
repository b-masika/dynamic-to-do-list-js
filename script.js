//wait for the HTML document to fully load
document.addEventListener('DOMContentLoaded', function () {

    //select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    //Function to add a new task
    function addTask() {
        //get and trim the task text
        let taskText = taskInput.value.trim();

        //check if input is empty
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        //create a new list item(li)
        const li = document.createElement('li');
        li.textContent = taskText;

        //create a remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.classList.add = ("remove-btn");

        //remove task when button is clicked
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        //add remove button to the li
        li.appendChild(removeBtn);

        //add li to the task list
        taskList.appendChild(li);

        //clear input field
        taskInput.value = "";

    }

    //add event listener to add task button
    addButton.addEventListener('click', addTask);

    //allow adding tasks using enter key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask()
        }
    });

});