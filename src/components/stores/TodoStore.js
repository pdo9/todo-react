import { makeAutoObservable } from 'mobx';

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
    // this.todoList = [
    //   { userID: 1, todoID: 1, isCompleted: false, todoText: '111' },
    //   { userID: 1, todoID: 2, isCompleted: false, todoText: '222' },
    //   { userID: 1, todoID: 3, isCompleted: false, todoText: '333' },
    //   { userID: 1, todoID: 4, isCompleted: false, todoText: '444' },
    // ];

    this.todoList = JSON.parse(localStorage.getItem('todo'));

    console.log('getTodoList:', this.todoList);
  };

  //setTodoItem = () => {};

  addTodoItem = (todoItem) => {
    this.todoList.push(todoItem);
    console.log('TodoStore.addTodoItem:', todoItem);
    const todos = JSON.parse(localStorage.getItem('todo'));
    todos.push(todoItem);
    localStorage.setItem('todo', JSON.stringify(todos));
  };

  removeTodoItem = (id) => {
    this.todoList = this.todoList.filter((todoItem) => todoItem.todoID !== id);
    console.log('TodoStore.removeTodoItem:', id);
    localStorage.setItem('todo', JSON.stringify(this.todoList));
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
    localStorage.setItem('todo', JSON.stringify(this.todoList));
  };
}

export default new TodoStore();
