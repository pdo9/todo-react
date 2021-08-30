//import TodoObject from './TodoObject';

//класс для работы с объектами todo в localStorage
export default class TodoStorage {
  //получение массив todo-объектов из localStorage
  getTodosFromStorage() {
    let todosFromStorage = [];

    for (let i = 0; i <= localStorage.length - 1; i++) {
      let key = localStorage.key(i);

      if (key && key.startsWith('todoObject')) {
        let value = localStorage[key];

        todosFromStorage.push(JSON.parse(value));
      }
    }

    /*
    for (let i = 0; i <= todosFromStorage.length - 1; i++) {
      console.log(todosFromStorage[i]);
    }
    */

    return todosFromStorage;
  }

  //добавление/обновление объекта todo в localStorage по ключу
  setTodoIntoStorage(key, todoObject) {
    localStorage.setItem(key, JSON.stringify(todoObject));
  }

  //удаление объекта todo из localStorage по ключу
  removeTodoFromStorage(key) {
    localStorage.removeItem(key);
  }
}
