Vanilla JS To-Do List App 📝
A simple, clean, and dynamic to-do list web application built entirely with front-end technologies. This project allows users to add, mark as complete, and delete tasks, with all changes reflected instantly in the UI without a page reload.

Preview
Here’s what the application looks like in action:

Initial State & Adding Tasks
+---------------------------------------------+
|              My To-Do List 📝               |
|                                             |
|  +---------------------------+  +-------+   |
|  | Add a new task...         |  |  Add  |   |
|  +---------------------------+  +-------+   |
|                                             |
+---------------------------------------------+

Active List with a Completed Task
+---------------------------------------------+
|                                             |
|  +---------------------------------------+  |
|  | ~~Buy groceries~~           [Delete]  |  |
|  +---------------------------------------+  |
|  | Walk the dog                [Delete]  |  |
|  +---------------------------------------+  |
|  | Finish project report       [Delete]  |  |
|  +---------------------------------------+  |
|                                             |
+---------------------------------------------+



Features
Add Tasks: Quickly add new tasks to your list via an input field.

Mark as Complete: Click on a task to toggle its completion status (indicated by a line-through).

Delete Tasks: Remove tasks from the list with a dedicated delete button.

Responsive UI: The layout is clean and functional on different screen sizes.

Instant Updates: The DOM is manipulated directly with JavaScript for a seamless, single-page application experience.

No Backend Needed: Runs entirely in the browser.

Technologies Used
This project is built using fundamental web technologies, making it a great example of Vanilla JavaScript in action.

HTML5: For the structure and content of the application.

CSS3: For all styling, including layout, colors, and the "completed" task effect.

Vanilla JavaScript (ES6): For all the logic and dynamic manipulation of the DOM.

Setup and Usage
No complex setup is required! To run this project locally, follow these simple steps:

Download the files: Make sure you have the three project files in the same folder:

index.html

style.css

script.js

Open in Browser: Simply open the index.html file in your favorite web browser (like Chrome, Firefox, or Edge).

(Optional) Use a Live Server: For a better development experience with automatic reloading on code changes, you can use an extension like Live Server in VS Code. Right-click on index.html and select "Open with Live Server".

How It Works
The application's logic is handled entirely on the client-side.

index.html provides the initial static structure, including the input field, button, and the <ul> container for tasks.

style.css styles all elements and contains a .completed class that applies a line-through text decoration.

script.js listens for DOM events. When the "Add" button is clicked or "Enter" is pressed, it:

Reads the text from the input field.

Creates a new <li> element.

Adds the task text and a "Delete" button inside the <li>.

Attaches event listeners to the new list item for toggling completion and for deletion.

Appends the new <li> to the main task list (<ul>).

Clears the input field.

Output

<img width="848" height="550" alt="Image" src="https://github.com/user-attachments/assets/d9f8ab20-ae9d-4b1b-89b0-03ba5b80146a" />
