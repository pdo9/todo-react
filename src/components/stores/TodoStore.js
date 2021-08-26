import { makeAutoObservable } from 'mobx';

class TodoStore {
  todoList = [];

  constructor() {
    makeAutoObservable(this);
    this.todoList = [
      { userID: 1, todoID: 1, isCompleted: false, todoText: '111' },
      { userID: 1, todoID: 2, isCompleted: true, todoText: '222' },
      { userID: 1, todoID: 3, isCompleted: false, todoText: '333' },
    ];
  }

  getTodoList = () => {
    this.todoList = [
      { userID: 1, todoID: 1, isCompleted: false, todoText: '111' },
      { userID: 1, todoID: 2, isCompleted: false, todoText: '222' },
      { userID: 1, todoID: 3, isCompleted: false, todoText: '333' },
      { userID: 1, todoID: 4, isCompleted: false, todoText: '444' },
    ];
    console.log('getTodoList:', this.todoList);
  };

  addTodoItem = (todoItem) => {
    this.todoList.push(todoItem);
    console.log('TodoStore.addTodoItem:', todoItem);
  };

  removeTodoItem = (id) => {
    this.todoList = this.todoList.filter((todoItem) => todoItem.todoID !== id);
    console.log('TodoStore.removeTodoItem:', id);
  };

  changeTodoItemStatus = (id) => {
    this.todoList = this.todoList.map((todoItem) => {
      if (todoItem.todoID === id) {
        console.log(
          'BEFORE TodoStore.changeTodoItemStatus:',
          todoItem.isCompleted
        );
        todoItem.isCompleted = !todoItem.isCompleted;
        console.log(
          'AFTER TodoStore.changeTodoItemStatus:',
          todoItem.isCompleted
        );
      }
      return todoItem;
    });
  };
}

export default new TodoStore();
