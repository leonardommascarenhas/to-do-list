import Task from "./toDo";

export default class Projects {
  constructor() {
    this.projeto = [];
  }
  newTask(name) {
    let p = new Task(name);
    this.projeto.push(p);
    return p;
  }
  getProjeto() {
    return this.projeto;
  }
  numberOfTask() {
    return this.projeto.length;
  }
}
