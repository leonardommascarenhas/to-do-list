import createTaskContainer from "./userInterface";
import { displayArray } from "./userInterface";
let createTaskBtn = document.getElementById("create-task-btn");
createTaskBtn.addEventListener("click", createTaskContainer);

document.addEventListener("DOMContentLoaded", displayArray, false);
