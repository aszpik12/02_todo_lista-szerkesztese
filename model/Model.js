import { TODOLIST2 } from "../adatok.js";
class Model {
  #list = [];
  constructor(list) {
    this.#list = TODOLIST2;
  }

  ujAdat(obj) {
    this.#list.push(obj);
  }

  getlist() {
    return this.#list;
  }
}
export default Model;
