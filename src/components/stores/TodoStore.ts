import { makeAutoObservable } from 'mobx';
import { LOCALSTORAGE_KEYS } from '../utils/constants';
import AuthStore from '../stores/AuthStore';

export type TTodo = {
  userID: number;
  todoID: number;
  isCompleted: boolean;
  todoText: string;
};

class TodoStore {
  todoList: TTodo[] = [];

  isInEditMode: boolean = false;

  currentTodoItem: TTodo = {
    userID: 0,
    todoID: 0,
    isCompleted: false,
    todoText: '',
  };

  filterValue: string = '';
  sortValue: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  /**
   * Получение списка todo
   */
  getTodoList = () => {
    console.log('filterValue:', this.filterValue);
    console.log('sortValue:', this.sortValue);

    //исходный список из localStorage
    let filteredTodoList: TTodo[] = JSON.parse(
      localStorage.getItem(LOCALSTORAGE_KEYS.KEY_TODO) || '[]'
    );

    //фильтрация по ID пользователя
    filteredTodoList = filteredTodoList.filter(
      (todoItem) => todoItem.userID === AuthStore.authState.userID
    );

    //фильтрация по строке поиска
    if (this.filterValue) {
      filteredTodoList = filteredTodoList.filter((todoItem) =>
        todoItem.todoText.includes(this.filterValue)
      );
    }

    //сортировка выбранным методом
    if (this.sortValue) {
      switch (this.sortValue) {
        case 'ASC':
          filteredTodoList.sort();
          break;
        case 'DESC':
          filteredTodoList.reverse();
          break;
        default:
          break;
      }

      // this.sortValue === 'ASC'
      //   ? filteredTodoList.sort()
      //   : filteredTodoList.reverse();
    }

    this.todoList = filteredTodoList;
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
    this.isInEditMode = true;
    this.todoList = this.todoList.filter((todoItem) => todoItem.todoID !== id);
    console.log('TodoStore.removeTodoItem:', id);
    localStorage.setItem(
      LOCALSTORAGE_KEYS.KEY_TODO,
      JSON.stringify(this.todoList)
    );

    this.isInEditMode = false;
    this.currentTodoItem = {
      userID: 0,
      todoID: 0,
      isCompleted: false,
      todoText: '',
    };
  };

  /**
   * Изменение статуса элемента todo
   */
  changeTodoItemStatus = (id: number) => {
    this.isInEditMode = true;

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

    this.isInEditMode = false;
    this.currentTodoItem = {
      userID: 0,
      todoID: 0,
      isCompleted: false,
      todoText: '',
    };
  };

  /**
   * Изменение текста todo
   */
  changeTodoItemText = (todoItem: TTodo, text: string) => {
    this.isInEditMode = true;
    this.currentTodoItem = todoItem;
    console.log('currentEditingTodoItemId:', this.currentTodoItem);

    this.todoList = this.todoList.map((todoItem) => {
      if (todoItem.todoID === this.currentTodoItem.todoID) {
        todoItem.todoText = text;
      }
      return todoItem;
    });

    localStorage.setItem(
      LOCALSTORAGE_KEYS.KEY_TODO,
      JSON.stringify(this.todoList)
    );

    this.isInEditMode = false;
    this.currentTodoItem = {
      userID: 0,
      todoID: 0,
      isCompleted: false,
      todoText: '',
    };
  };
}

export default new TodoStore();
