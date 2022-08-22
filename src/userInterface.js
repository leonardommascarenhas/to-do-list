import Task from "./toDo";

function createTaskContainer() {
  let container = document.querySelector(".create-task-container");
}

function createButton(append, id, text) {
  let button = document.createElement("button");
  button.innerText = text;
  button.id = id;
  append.appendChild(button);
}

function createInput(append, className, name, id, placeholder) {
  let input = document.createElement("input");
  input.classList = className;
  input.id = id;
  input.name = name;
  input.placeholder = placeholder;
  append.appendChild(input);
}
