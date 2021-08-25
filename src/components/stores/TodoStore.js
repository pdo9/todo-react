import { action, makeObservable, observable } from 'mobx';
import TodoStorage from '../todoStorage/TodoStorage';

const storage = new TodoStorage();

export class TodoStore {
  constructor() {
    makeObservable(this, {
      todoList: observable,
      getTodoList: action,
      // addTodoItem: action,
      // editTodoItem: action,
      // removeTodoItem: action,
    });
  }

  todoList = [];

  getTodoList = () => {
    this.todoList = storage.getTodosFromStorage();
    console.log('getTodoList:', this.todoList);
    //this.todoList = [{ id: 1629882607953, isActive: true, text: 'sdfdsf' }];
  };

  // addTodoItem = () => {};

  // editTodoItem = () => {};

  // editTodoItem = () => {};

  // removeTodoItem = () => {};
}
