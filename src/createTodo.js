export default function toDoDiv() {
  let container = document.querySelector(".toDo-container");
  let divContainer = document.createElement("div");
  let buttonContainer = document.createElement("div");
  createInput(divContainer, "text", "input", "input", "Add a task", "input");
  createButton(buttonContainer, "Add", "add-task-btn");
  createButton(buttonContainer, "cancel", "cancel-task-btn");
  divContainer.appendChild(buttonContainer);
  container.appendChild(divContainer);
}

function createButton(append, text, id) {
  let button = document.createElement("button");
  button.innerText = text;
  button.id = id;
  append.appendChild(button);
}

function createInput(append, type, className, id, placeholder, name) {
  let input = document.createElement("input");
  input.type = type;
  input.className = className;
  input.id = id;
  input.placeholder = placeholder;
  input.name = name;
  append.appendChild(input);
}
