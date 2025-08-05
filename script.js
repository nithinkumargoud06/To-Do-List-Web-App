// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // Get references to the essential elements
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    // --- Function to add a new task ---
    const addTask = () => {
        const taskText = taskInput.value.trim(); // Get input value and remove whitespace

        // Check if the input is empty
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        // 1. Create the list item (li)
        const li = document.createElement('li');

        // 2. Create the task text span
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        
        // 3. Create the delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn'; // Add a class for styling

        // Append the span and delete button to the list item
        li.appendChild(taskSpan);
        li.appendChild(deleteBtn);

        // Append the new list item to the task list
        taskList.appendChild(li);

        // Clear the input field for the next task
        taskInput.value = '';

        // --- Event Listeners for the new task ---

        // Event listener to mark task as complete (toggles 'completed' class)
        li.addEventListener('click', (event) => {
            // We only want to toggle complete if the click is not on the delete button
            if (event.target.tagName !== 'BUTTON') {
                li.classList.toggle('completed');
            }
        });

        // Event listener for the delete button
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(li);
        });
    };

    // --- Event Listeners for initial elements ---

    // Add task when the "Add" button is clicked
    addTaskBtn.addEventListener('click', addTask);

    // Add task when the "Enter" key is pressed in the input field
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});