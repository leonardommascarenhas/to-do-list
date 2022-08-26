import Projects from "./storage";
import Task from "./toDo";

let allTasks = new Projects();

export default function createTaskContainer() {
  let container = document.querySelector(".create-task-container");
  let taskHolder = document.createElement("div");
  let buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");
  taskHolder.classList.add("input-container");
  createButton(buttonContainer, "add-btn", "ADD", createTask);
  createButton(buttonContainer, "cancel-btn", "cancel", cancelTask);
  createInput(taskHolder, "text", "input", "input", "text", "add task");
  taskHolder.appendChild(buttonContainer);
  container.appendChild(taskHolder);
}

function createButton(append, id, text, functionality, type) {
  let button = document.createElement("button");
  button.innerText = text;
  button.id = id;
  button.type = type;
  button.onclick = functionality;
  append.appendChild(button);
}

function createInput(append, type, className, name, id, placeholder) {
  let input = document.createElement("input");
  input.type = type;
  input.classList = className;
  input.id = id;
  input.name = name;
  input.placeholder = placeholder;
  append.appendChild(input);
}

function showTask(append, innerHTML) {
  let createContainer = document.createElement("div");
  let task = document.createElement("p");
  createButton(createContainer, "delete-btn", " ", cancelTask, "radio");
  task.innerHTML = innerHTML;
  createContainer.appendChild(task);
  append.appendChild(createContainer);
}

function createTask() {
  let input = document.getElementById("text").value;
  let container = document.querySelector(".task-container");
  let taskContainer = document.querySelector(".create-task-container");
  allTasks.newTask(input);
  console.log(allTasks);
  taskContainer.innerHTML = "";
  showTask(container, input);
}

function cancelTask() {
  let container = document.querySelector(".input-container");
  container.remove();
}
