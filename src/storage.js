import Task from "./toDo";

export default class Projects {
  constructor() {
    this.projeto = [];
  }
  newTask(name) {
    let p = new Task();
    p.setName(name);
    p.setDate(Task.prototype.date);
    this.projeto.push(p);
    return p;
  }
  removeTask(e) {
    let index = this.projeto.indexOf(e);
    this.projeto.splice(index, 1);
  }
  numberOfTask() {
    return this.projeto.length;
  }
}
