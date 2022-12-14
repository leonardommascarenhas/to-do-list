import Projects from "./storage";
import Task from "./toDo";

let allTasks = new Projects();

export default function createTaskContainer() {
  let container = document.querySelector(".create-task-container");
  if (container.querySelector(".input-container") == null) {
    let taskHolder = document.createElement("div");
    let buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    taskHolder.classList.add("input-container");
    createButton(buttonContainer, "add-btn", "ADD", createTask);
    createButton(buttonContainer, "cancel-btn", "cancel", cancelTask);
    createInput(taskHolder, "text", "input", "input", "text", "add task");
    taskHolder.appendChild(buttonContainer);
    container.appendChild(taskHolder);
  } else {
    alert("you need to create the task first");
  }
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
  return input;
}

function removeTaskFromLibrary(e) {
  e.preventDefault();
  let taskContainer = e.target.parentElement;
  taskContainer.remove();
  allTasks.removeTask(e);
  console.log(allTasks);
}

function showTask(append, innerHTML, dateInput) {
  let createContainer = document.createElement("div");
  let task = document.createElement("p");
  createButton(createContainer, "delete-btn", " ", removeTaskFromLibrary, "radio");
  task.innerHTML = innerHTML;
  createContainer.classList.add("added-task");
  createContainer.appendChild(task);
  const dateInputt = createInput(createContainer, "date", "input", "input", "date", "add task");
  dateInputt.value = dateInput;
  dateInputt.addEventListener("change", (e) => {
    let date = e.target.value;
    allTasks.newTask(task.innerHTML, date);
    console.log(allTasks);
  });
  append.appendChild(createContainer);
}
export function displayArray() {
  if (localStorage.getItem("myArray") !== null) {
    let taskContainer = document.querySelector(".task-container");
    let myObj = JSON.parse(localStorage.getItem("myArray"));
    myObj.forEach((item) => {
      showTask(taskContainer, item.name, item.date);
      allTasks.setTask(item.name, item.date);
    });
    console.log(allTasks);
  }
}
function createTask() {
  let input = document.getElementById("text").value;
  let container = document.querySelector(".task-container");
  let taskContainer = document.querySelector(".create-task-container");
  allTasks.pushTask(input);
  console.log(allTasks);
  taskContainer.innerHTML = "";
  showTask(container, input);
}
function cancelTask() {
  let container = document.querySelector(".input-container");
  container.remove();
}
