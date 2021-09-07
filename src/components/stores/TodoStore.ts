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
  private _todoList: ITodoItem[] = [];
  //private _filteredTodoList: ITodoItem[] = [];

  private _isInEditMode: boolean = false;
  private _currentTodoItem: ITodoItem = emptyTodoItem;

  private _searchValue: string = '';
  private _sortValue: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  /**
   * Исходный список todo
   */
  get todoList(): ITodoItem[] {
    let filteredTodoList: ITodoItem[] = this.filterBySearchValue(
      this._todoList
    );

    filteredTodoList = this.sortBySortValue(filteredTodoList);

    return filteredTodoList;
  }

  /**
   * Исходный список todo
   */
  set todoList(modifiedTodoList: ITodoItem[]) {
    this.isInEditMode = true;

    console.log('SET TODOLIST', 'CURRENT_TODO_ITEM:', this.currentTodoItem);

    //todo из local storage, за исключением todo текущего пользователя
    let globalTodoList: ITodoItem[] = JSON.parse(
      localStorage.getItem(LOCALSTORAGE_KEYS.KEY_TODO) || '[]'
    ).filter(
      (todoItem: ITodoItem) => todoItem.userID !== AuthStore.authState.userID
    );

    //добавляем к todo из local storage измененные todo текущего пользователя
    globalTodoList = [...globalTodoList, ...modifiedTodoList];

    localStorage.setItem(
      LOCALSTORAGE_KEYS.KEY_TODO,
      JSON.stringify(globalTodoList)
    );

    this.isInEditMode = false;
    this.currentTodoItem = emptyTodoItem;

    this._todoList = modifiedTodoList;
  }

  // /**
  //  * Отфильтрованный список todo
  //  */
  // get filteredTodoList(): ITodoItem[] {
  //   return this._filteredTodoList;
  // }

  // /**
  //  * Отфильтрованный список todo
  //  */
  // set filteredTodoList(value: ITodoItem[]) {
  //   this._filteredTodoList = value;
  // }

  /**
   * Выбранный для редактирования todoItem
   */
  get currentTodoItem(): ITodoItem {
    return this._currentTodoItem;
  }

  /**
   * Выбранный для редактирования todoItem
   */
  set currentTodoItem(value: ITodoItem) {
    this._currentTodoItem = value;
  }

  /**
   * Режим редактирования todoItem
   */
  get isInEditMode(): boolean {
    return this._isInEditMode;
  }

  /**
   * Режим редактирования todoItem
   */
  set isInEditMode(value: boolean) {
    this._isInEditMode = value;
  }

  /**
   * Строка поиска
   */
  get searchValue(): string {
    return this._searchValue;
  }

  /**
   * Строка поиска
   */
  set searchValue(value: string) {
    this._searchValue = value;
  }

  /**
   * Метод сортировки
   */
  get sortValue(): string {
    return this._sortValue;
  }

  /**
   * Метод сортировки
   */
  set sortValue(value: string) {
    this._sortValue = value;
  }

  /**
   * Получение списка todo
   */
  getTodoList = () => {
    console.log('filterValue:', this.searchValue);
    console.log('sortValue:', this.sortValue);

    //исходный список из localStorage, отфильтрованный по ID текущего пользователя
    this.todoList = JSON.parse(
      localStorage.getItem(LOCALSTORAGE_KEYS.KEY_TODO) || '[]'
    ).filter(
      (todoItem: ITodoItem) => todoItem.userID === AuthStore.authState.userID
    );

    //this.filteredTodoList = this.filterBySearchValue(this.todoList);

    // //this.filterByUserID();
    // this.filterBySearchValue();
    // this.sortBySortValue();
  };

  // /**
  //  * Фильтрация списка todo по ID пользователя
  //  */
  // filterByUserID = () => {
  //   this.filteredTodoList = this.filteredTodoList.filter(
  //     (todoItem) => todoItem.userID === AuthStore.authState.userID
  //   );
  // };

  /**
   * Фильтрация списка todo по строке поиска
   */
  // filterBySearchValue = () => {
  //   if (this.searchValue) {
  //     this.filteredTodoList = this.filteredTodoList.filter((todoItem) =>
  //       todoItem.todoText.includes(this.searchValue)
  //     );
  //   }
  //   console.log('this.filteredTodoList.length:', this.filteredTodoList.length);
  // };
  filterBySearchValue = (todoList: ITodoItem[]): ITodoItem[] => {
    if (this.searchValue) {
      todoList = todoList.filter((todoItem) =>
        todoItem.todoText.includes(this.searchValue)
      );
    }
    console.log('SEARCH: todoList.length:', todoList.length);

    return todoList;
  };

  /**
   * Сортировка выбранным методом
   */
  // sortBySortValue = () => {
  //   if (this.sortValue) {
  //     switch (this.sortValue) {
  //       case SORT_KEYS.DATE_ASC:
  //         this.filteredTodoList.sort();
  //         break;

  //       case SORT_KEYS.DATE_DESC:
  //         this.filteredTodoList.reverse();
  //         break;

  //       case SORT_KEYS.LOCALECOMPARE_ASC:
  //         this.filteredTodoList.sort((a, b) =>
  //           a.todoText.localeCompare(b.todoText)
  //         );
  //         break;

  //       case SORT_KEYS.LOCALECOMPARE_DESC:
  //         this.filteredTodoList.sort((a, b) =>
  //           b.todoText.localeCompare(a.todoText)
  //         );
  //         break;

  //       case SORT_KEYS.IS_COMPLETED_ASC:
  //         this.filteredTodoList.sort((a, b) => {
  //           if (a.isCompleted) {
  //             return -1;
  //           }
  //           if (b.isCompleted) {
  //             return 1;
  //           }
  //           return 0;
  //         });
  //         break;

  //       case SORT_KEYS.IS_COMPLETED_DESC:
  //         this.filteredTodoList.sort((a, b) => {
  //           if (a.isCompleted) {
  //             return 1;
  //           }
  //           if (b.isCompleted) {
  //             return -1;
  //           }
  //           return 0;
  //         });
  //         break;

  //       default:
  //         break;
  //     }
  //   }

  //   // console.log('this.filteredTodoList - sort:', this.filteredTodoList);
  // };
  sortBySortValue = (todoList: ITodoItem[]): ITodoItem[] => {
    let sortedTodoList = todoList;

    if (this.sortValue) {
      switch (this.sortValue) {
        case SORT_KEYS.DATE_ASC:
          sortedTodoList = todoList.slice().sort();
          break;

        case SORT_KEYS.DATE_DESC:
          sortedTodoList = todoList.slice().reverse();
          break;

        case SORT_KEYS.LOCALECOMPARE_ASC:
          sortedTodoList = todoList
            .slice()
            .sort((a, b) => a.todoText.localeCompare(b.todoText));
          break;

        case SORT_KEYS.LOCALECOMPARE_DESC:
          sortedTodoList = todoList
            .slice()
            .sort((a, b) => b.todoText.localeCompare(a.todoText));
          break;

        case SORT_KEYS.IS_COMPLETED_ASC:
          sortedTodoList = todoList.slice().sort((a, b) => {
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
          sortedTodoList = todoList.slice().sort((a, b) => {
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

    // console.log('this.filteredTodoList - sort:', this.filteredTodoList);
    return sortedTodoList;
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

    this.getTodoList();
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
  };

  /**
   * Изменение текста todo
   */
  changeTodoItemText = (/*todoItem: ITodoItem,*/ text: string) => {
    console.log('currentEditingTodoItemId:', this.currentTodoItem);

    this.todoList = this.todoList.map((todoItem) => {
      if (todoItem.todoID === this.currentTodoItem.todoID) {
        todoItem.todoText = text;
      }
      return todoItem;
    });
  };
}

export default new TodoStore();
