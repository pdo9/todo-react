import React from 'react';
import TodoStore, { TTodo } from '../stores/TodoStore';
import AuthStore from '../stores/AuthStore';

const TodoFormInput: React.FC = () => {
  let currentUserID: number = AuthStore.authState.userID;

  const [newTodoItem, setNewTodoItem] = React.useState<TTodo>({
    userID: 0,
    todoID: 0,
    isCompleted: false,
    todoText: '',
  });

  const addNewTodoItem = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    TodoStore.addTodoItem(newTodoItem);
    setNewTodoItem({
      userID: 0,
      todoID: 0,
      isCompleted: false,
      todoText: '',
    });
  };

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
        <button className='todo-input-button' onClick={addNewTodoItem}>
          Добавить
        </button>
      </div>
    </form>
  );
};

export default TodoFormInput;
