const createTaskForm = document.querySelector("#create-task-form");
const taskList = document.querySelector("#tasks");

createTaskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const newTaskDescriptionInput = document.querySelector(
    "#new-task-description"
  );
  const taskDescription = newTaskDescriptionInput.value;

  function buildToDo(task) {
    const li = document.createElement("li");
    li.textContent = task;
    taskList.appendChild(li);
  }

  buildToDo(taskDescription);

  // Optional: Clear input after submission
  newTaskDescriptionInput.value = "";
});
