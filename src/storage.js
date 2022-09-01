import Task from "./toDo";

export default class Projects {
  constructor() {
    this.projeto = [];
  }
  storeArray(myArr) {
    localStorage.setItem("myArray", JSON.stringify(myArr));
  }
  pushTask(name) {
    let p = new Task();
    p.setName(name);
    this.projeto.push(p);
    this.storeArray(p);
    return p;
  }
  newTask(name, date) {
    let p = new Task();
    p.setName(name);
    p.setDate(date);
    let index = this.projeto.findIndex((todo) => {
      return todo.name === p.name;
    });
    this.projeto.splice(index, 1, p);
    this.storeArray(this.projeto);
    return p;
  }
  setTask(name, date) {
    let p = new Task();
    p.setName(name);
    p.setDate(date);
    this.projeto.push(p);
    return p;
  }
  removeTask(e) {
    let index = this.projeto.indexOf(e);
    let newArray = JSON.parse(localStorage.getItem("myArray"));
    this.projeto.splice(index, 1);
    newArray.splice(index, 1);
    this.storeArray(newArray);
  }
  numberOfTask() {
    return this.projeto.length;
  }
}
