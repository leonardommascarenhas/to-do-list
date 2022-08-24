import Task from "./toDo";

export default function createTaskContainer() {
  let container = document.querySelector(".create-task-container");
  let taskHolder = document.createElement("div");
  taskHolder.classList.add("input-container");
  createButton(taskHolder, "add-btn", "ADD", createTask);
  createButton(taskHolder, "cancel-btn", "cancel", cancelTask);
  createInput(taskHolder, "text", "input", "input", "text", "add task");
  container.appendChild(taskHolder);
}

function createButton(append, id, text, functionality) {
  let button = document.createElement("button");
  button.innerText = text;
  button.id = id;
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

function createTask() {
  let input = document.getElementById("text").value;
  let container = document.querySelector(".task-container");
  let createContainer = document.createElement("div");
  let taskContainer = document.querySelector(".create-task-container");
  const objeto = new Task(input);
  objeto.pushProjeto(input);
  taskContainer.innerHTML = "";
  createContainer.innerHTML = input;
  container.appendChild(createContainer);
}

function cancelTask() {
  let container = document.querySelector(".input-container");
  container.remove();
}

function createPriority() {}
