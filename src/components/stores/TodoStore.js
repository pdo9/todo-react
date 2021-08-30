import { makeAutoObservable } from 'mobx';

const KEY_TODO = 'todo';

class TodoStore {
  todoList = [];

  todoItem = {
    userID: 0,
    todoID: 0,
    isCompleted: false,
    todoText: '',
  };

  constructor() {
    makeAutoObservable(this);
  }

  getTodoList = () => {
    localStorage.getItem(KEY_TODO)
      ? (this.todoList = JSON.parse(localStorage.getItem(KEY_TODO)))
      : localStorage.setItem(KEY_TODO, '[]');

    // console.log('getTodoList:', this.todoList);
  };

  //setTodoItem = () => {};

  addTodoItem = (todoItem) => {
    this.todoList.push(todoItem);
    console.log('TodoStore.addTodoItem:', todoItem);
    const todos = JSON.parse(localStorage.getItem(KEY_TODO));
    todos.push(todoItem);
    localStorage.setItem(KEY_TODO, JSON.stringify(todos));
  };

  removeTodoItem = (id) => {
    this.todoList = this.todoList.filter((todoItem) => todoItem.todoID !== id);
    console.log('TodoStore.removeTodoItem:', id);
    localStorage.setItem(KEY_TODO, JSON.stringify(this.todoList));
  };

  changeTodoItemStatus = (id) => {
    this.todoList = this.todoList.map((todoItem) => {
      if (todoItem.todoID === id) {
        console.log('BEFORE TodoStore.changeTodoItemStatus:', todoItem);
        todoItem.isCompleted = !todoItem.isCompleted;
        console.log('AFTER TodoStore.changeTodoItemStatus:', todoItem);
      }
      return todoItem;
    });
    localStorage.setItem(KEY_TODO, JSON.stringify(this.todoList));
  };
}

export default new TodoStore();
