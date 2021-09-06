import { makeAutoObservable } from 'mobx';
import { LOCALSTORAGE_KEYS, SORT_KEYS } from '../utils/constants';
import AuthStore from '../stores/AuthStore';

export interface ITodoItem {
  userID: number;
  todoID: number;
  isCompleted: boolean;
  todoText: string;
}

const emptyTodoItem: ITodoItem = {
  userID: 0,
  todoID: 0,
  isCompleted: false,
  todoText: '',
};

class TodoStore {
  todoList: ITodoItem[] = [];
  filteredTodoList: ITodoItem[] = [];
  isInEditMode: boolean = false;
  currentTodoItem: ITodoItem = emptyTodoItem;
  searchValue: string = '';
  sortValue: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  // get todoList() {
  //   const data = this._todoList;
  //   //sort...
  //   return data;
  // }

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

    this.filterByUserID();
    this.filterBySearchValue();
    this.sortBySortValue();
  };

  /**
   * Фильтрация списка todo по ID пользователя
   */
  filterByUserID = () => {
    this.filteredTodoList = this.filteredTodoList.filter(
      (todoItem) => todoItem.userID === AuthStore.authState.userID
    );
  };

  /**
   * Фильтрация списка todo по строке поиска
   */
  filterBySearchValue = () => {
    if (this.searchValue) {
      this.filteredTodoList = this.filteredTodoList.filter((todoItem) =>
        todoItem.todoText.includes(this.searchValue)
      );
    }
  };

  /**
   * Сортировка выбранным методом
   */
  sortBySortValue = () => {
    if (this.sortValue) {
      switch (this.sortValue) {
        case SORT_KEYS.DATE_ASC:
          this.filteredTodoList.sort();
          break;

        case SORT_KEYS.DATE_DESC:
          this.filteredTodoList.reverse();
          break;

        case SORT_KEYS.LOCALECOMPARE_ASC:
          this.filteredTodoList.sort((a, b) =>
            a.todoText.localeCompare(b.todoText)
          );
          break;

        case SORT_KEYS.LOCALECOMPARE_DESC:
          this.filteredTodoList.sort((a, b) =>
            b.todoText.localeCompare(a.todoText)
          );
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
  addTodoItem = (todoItem: ITodoItem) => {
    console.log('TodoStore.addTodoItem:', todoItem);
    const todoList: ITodoItem[] = JSON.parse(
      localStorage.getItem(LOCALSTORAGE_KEYS.KEY_TODO) || '[]'
    );
    todoList.push(todoItem);
    localStorage.setItem(LOCALSTORAGE_KEYS.KEY_TODO, JSON.stringify(todoList));
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

    // this.getTodoList();
    this.isInEditMode = false;
    this.currentTodoItem = emptyTodoItem;
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

    // this.getTodoList();
    this.isInEditMode = false;
    this.currentTodoItem = emptyTodoItem;
  };

  /**
   * Изменение текста todo
   */
  changeTodoItemText = (todoItem: ITodoItem, text: string) => {
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

    // this.getTodoList();
    this.isInEditMode = false;
    this.currentTodoItem = emptyTodoItem;
  };
}

export default new TodoStore();
