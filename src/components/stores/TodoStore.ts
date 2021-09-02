import { makeAutoObservable } from 'mobx';
import { LOCALSTORAGE_KEYS } from '../utils/constants';

export type TTodo = {
  userID: number;
  todoID: number;
  isCompleted: boolean;
  todoText: string;
};

class TodoStore {
  todoList: TTodo[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  /**
   * Получение списка todo
   */
  getTodoList = () => {
    const todoList: TTodo[] = JSON.parse(
      localStorage.getItem(LOCALSTORAGE_KEYS.KEY_TODO) || '[]'
    );

    this.todoList = todoList;
  };

  /**
   * Добавление элемента todo
   */
  addTodoItem = (todoItem: TTodo) => {
    console.log('TodoStore.addTodoItem:', todoItem);
    const todos: TTodo[] = JSON.parse(
      localStorage.getItem(LOCALSTORAGE_KEYS.KEY_TODO) || '[]'
    );
    todos.push(todoItem);
    localStorage.setItem(LOCALSTORAGE_KEYS.KEY_TODO, JSON.stringify(todos));
    this.getTodoList();
  };

  /**
   * Удаление элемента todo
   */
  removeTodoItem = (id: number) => {
    this.todoList = this.todoList.filter((todoItem) => todoItem.todoID !== id);
    console.log('TodoStore.removeTodoItem:', id);
    localStorage.setItem(
      LOCALSTORAGE_KEYS.KEY_TODO,
      JSON.stringify(this.todoList)
    );
  };

  /**
   * Изменение статуса элемента todo
   */
  changeTodoItemStatus = (id: number) => {
    this.todoList = this.todoList.map((todoItem) => {
      if (todoItem.todoID === id) {
        console.log('BEFORE TodoStore.changeTodoItemStatus:', todoItem);
        todoItem.isCompleted = !todoItem.isCompleted;
        console.log('AFTER TodoStore.changeTodoItemStatus:', todoItem);
      }
      return todoItem;
    });
    localStorage.setItem(
      LOCALSTORAGE_KEYS.KEY_TODO,
      JSON.stringify(this.todoList)
    );
  };
}

export default new TodoStore();
