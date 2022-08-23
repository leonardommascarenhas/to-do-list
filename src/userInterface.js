import Task from "./toDo";

export default function createTaskContainer() {
  let container = document.querySelector(".create-task-container");
  createButton(container, "add-btn", "ADD");
  createButton(container, "cancel-btn", "cancel");
  createInput(container, "text", "input", "input", "text", "add task");
  let add = document.getElementById("add-btn");
  add.addEventListener("click", createTask);
}

function createButton(append, id, text) {
  let button = document.createElement("button");
  button.innerText = text;
  button.id = id;
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
