//wait for the HTML document to fully load
document.addEventListener('DOMContentLoaded', function () {

    //select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    //initialize tasks array from localStorage
    let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');

    //Function to add a new task
    function addTask(taskText = taskInput.value.trim(), save = true) {
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

            //remove task from tasks array and update localStorage
            tasks = tasks.filter(item => item !== taskText);
            localStorage.setItem('tasks', JSON.stringify(tasks));
        };

        //add remove button to the li
        li.appendChild(removeBtn);

        //add li to the task list
        taskList.appendChild(li);

        //clear input field only if saving
        if (save) {
            taskInput.value = "";
        }
        
        //save task to local storage if required
        if (save) {
            tasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(tasks));

        }
    }

    //load tasks from localStorage on page load
    tasks.forEach(taskText => addTask(taskText, false));

    //add event listener to add task button
    addButton.addEventListener('click', function() {
        addTask();
    });

    //allow adding tasks using enter key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

});