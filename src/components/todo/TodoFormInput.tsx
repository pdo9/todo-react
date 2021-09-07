import React from 'react';
import TodoStore, { ITodoItem } from '../stores/TodoStore';
import AuthStore from '../stores/AuthStore';
import { observer } from 'mobx-react-lite';

/**
 * Форма добавления элемента todo
 */
const TodoFormInput: React.FC = () => {
  let currentUserID: number = AuthStore.authState.userID;

  const [newTodoItem, setNewTodoItem] = React.useState<ITodoItem>({
    userID: 0,
    todoID: 0,
    isCompleted: false,
    todoText: '',
  });

  React.useEffect(
    () => {
      setNewTodoItem(TodoStore.currentTodoItem);
    },
    [TodoStore.currentTodoItem.todoID] // eslint-disable-line
  );

  /**
   * Добавление нового элемента todo
   */
  const addNewTodoItem = (event: React.SyntheticEvent): void => {
    event.preventDefault();

    if (newTodoItem.todoText.trim()) {
      TodoStore.addTodoItem(newTodoItem);
      setNewTodoItem({
        userID: 0,
        todoID: 0,
        isCompleted: false,
        todoText: '',
      });
    }
  };

  /**
   * Редактирование текущего (выбранному двойным кликом) элемента todo
   */
  const editTodoItemText = (event: React.SyntheticEvent): void => {
    event.preventDefault();

    if (newTodoItem.todoText.trim()) {
      TodoStore.changeTodoItemText(
        //TodoStore.currentTodoItem,
        newTodoItem.todoText
      );
      setNewTodoItem({
        userID: 0,
        todoID: 0,
        isCompleted: false,
        todoText: '',
      });
    }
  };

  let buttonText: string = '';
  TodoStore.isInEditMode
    ? (buttonText = 'Сохранить')
    : (buttonText = 'Добавить');

  return (
    <form>
      <div>
        <input
          className='todo-input'
          placeholder='Введите текст заметки'
          value={newTodoItem.todoText}
          onChange={(event) =>
            setNewTodoItem({
              userID: currentUserID,
              todoID: Date.now(),
              isCompleted: false,
              todoText: event.target.value,
            })
          }
        ></input>
      </div>
      <div>
        <button
          className='todo-input-button'
          onClick={TodoStore.isInEditMode ? editTodoItemText : addNewTodoItem}
        >
          {buttonText}
        </button>
      </div>
    </form>
  );
};

export default observer(TodoFormInput);
