import Task from "./toDo";

export default class Projects {
  constructor() {
    this.projeto = [];
  }
  pushTask(name) {
    let p = new Task();
    p.setName(name);
    this.projeto.push(p);
    return p;
  }
  newTask(e, name, date) {
    let p = new Task();
    p.setName(name);
    p.setDate(date);
    let index = this.projeto.indexOf(e);
    this.projeto.splice(index, 1, p);
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
