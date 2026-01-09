document.addEventListener("DOMContentLoaded", () => {
  const inputTask = document.getElementById("input-task");
  const addTaskButton = document.getElementById("addTask-js");
  const todoList = document.getElementById("todo-added-list");

  let tasks = JSON.parse(localStorage.getItem("task") || "[]");

  addTaskButton.addEventListener("click", () => {
    let inputName = inputTask.value.trim();

    if (inputName === "") return;

    let newTask = {
      id: Date.now(),
      name: inputName,
      completed: false,
    };

    tasks.push(newTask);
    saveTasks(tasks);
    renderTask(newTask);
    console.log(tasks);
    inputTask.value = "";
  });
});

function saveTasks(tasks) {
  localStorage.setItem("task", JSON.stringify(tasks));
}

function renderTask(task) {
  const li = document.createElement("li");
  li.innerHTML = `
  <span>${task.name}</span>
  <button class="special-button">delete</button>`;

  li.setAttribute("date-id", task.id);

  li.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") return;
    task.completed = !task.completed;
    li.classList.toggle("completed");
    let tasks = JSON.parse(localStorage.getItem("task") || "[]");
    tasks.find((t) => t.id === task.id).completed = task.completed;
    saveTasks(tasks);
  });

  if (task.completed) li.classList.add("completed");

  li.querySelector("button").addEventListener("click", (e) => {
    e.stopPropagation();
    let tasks = JSON.parse(localStorage.getItem("task") || "[]");
    tasks = tasks.filter((t) => t.id !== task.id);
    li.remove();
    saveTasks(tasks);
    document.getElementById("input-task").value = "";
    tasks = JSON.parse(localStorage.getItem("task") || "[]");
  });

  document.getElementById("todo-added-list").appendChild(li);
}
