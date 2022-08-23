let projeto = [];

export default class Task {
  constructor(name) {
    this.name = name;
  }
  pushProjeto(name) {
    projeto.push(name);
    console.log(projeto);
  }
}
