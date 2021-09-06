import { makeAutoObservable } from 'mobx';
import { LOCALSTORAGE_KEYS, SORT_KEYS } from '../utils/constants';
import AuthStore from '../stores/AuthStore';

export type TTodo = {
  userID: number;
  todoID: number;
  isCompleted: boolean;
  todoText: string;
};

class TodoStore {
  todoList: TTodo[] = [];

  filteredTodoList: TTodo[] = [];

  isInEditMode: boolean = false;

  currentTodoItem: TTodo = {
    userID: 0,
    todoID: 0,
    isCompleted: false,
    todoText: '',
  };

  searchValue: string = '';
  sortValue: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  /**
   * Получение списка todo
   */
  getTodoList = () => {
    console.log('filterValue:', this.searchValue);
    console.log('sortValue:', this.sortValue);

    //исходный список из localStorage
    this.todoList = JSON.parse(
      localStorage.getItem(LOCALSTORAGE_KEYS.KEY_TODO) || '[]'
    );

    this.filteredTodoList = this.todoList;

    //фильтрация по ID пользователя
    this.filteredTodoList = this.filteredTodoList.filter(
      (todoItem) => todoItem.userID === AuthStore.authState.userID
    );

    //фильтрация по строке поиска
    if (this.searchValue) {
      this.filteredTodoList = this.filteredTodoList.filter((todoItem) =>
        todoItem.todoText.includes(this.searchValue)
      );
    }

    //сортировка выбранным методом
    if (this.sortValue) {
      switch (this.sortValue) {
        case SORT_KEYS.DATE_ASC:
          this.filteredTodoList.sort();
          break;

        case SORT_KEYS.DATE_DESC:
          this.filteredTodoList.reverse();
          break;

        case SORT_KEYS.LOCALECOMPARE_ASC:
          this.filteredTodoList.sort((a, b) => {
            return a.todoText.localeCompare(b.todoText);
          });
          break;

        case SORT_KEYS.LOCALECOMPARE_DESC:
          this.filteredTodoList.sort((a, b) => {
            return b.todoText.localeCompare(a.todoText);
          });
          break;

        case SORT_KEYS.IS_COMPLETED_ASC:
          this.filteredTodoList.sort((a, b) => {
            if (a.isCompleted) {
              return -1;
            }
            if (b.isCompleted) {
              return 1;
            }
            return 0;
          });
          break;

        case SORT_KEYS.IS_COMPLETED_DESC:
          this.filteredTodoList.sort((a, b) => {
            if (a.isCompleted) {
              return 1;
            }
            if (b.isCompleted) {
              return -1;
            }
            return 0;
          });
          break;

        default:
          break;
      }
    }
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

    this.getTodoList();
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

    this.getTodoList();
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

    this.getTodoList();
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
