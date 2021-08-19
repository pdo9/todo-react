//класс для работы с объектом todo
export default class TodoObject {
  constructor(params) {
    this.id = params.id;
    this.isActive = params.isActive;
    this.text = params.text;
  }

  //сохранение объекта todo в localStorage
  saveIntoLocalStorage() {
    localStorage.setItem(`todoObject${this.id}`, JSON.stringify(this));
  }

  //удаление объекта todo из localStorage
  deleteFromLocalStorage() {
    localStorage.removeItem(`todoObject${this.id}`);
  }
}
