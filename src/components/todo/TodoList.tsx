import React from 'react';
import { observer } from 'mobx-react-lite';
import TodoItem from './TodoItem';
import TodoStore from '../stores/TodoStore';
import AuthStore from '../stores/AuthStore';
import { LOCALSTORAGE_KEYS } from '../utils/constants';

/**
 * Список todo
 */
const TodoList: React.FC = () => {
  React.useEffect(() => {
    const getTodoList = (event: StorageEvent) => {
      if (event.key === LOCALSTORAGE_KEYS.KEY_TODO) {
        TodoStore.getTodoList();
      }
    };

    window.addEventListener('storage', getTodoList);

    return () => {
      window.addEventListener('storage', getTodoList);
    };
  }, []); //eslint-disable-line

  return (
    <React.Fragment>
      <h2
        style={{ textAlign: 'center' }}
      >{`Ваш список заметок, ${AuthStore.authState.userName}:`}</h2>

      {TodoStore.isTodoListLoading ? (
        <div>
          <p>Идет получение данных...</p>
        </div>
      ) : TodoStore.error ? (
        <div>
          <p>{TodoStore.error.toString()}</p>
        </div>
      ) : (
        TodoStore.todoList.map((todoItem, index) => (
          <TodoItem
            key={todoItem.todoID}
            todoItem={todoItem}
            onCheckBoxClick={() =>
              TodoStore.changeTodoItemStatus(todoItem.todoID)
            }
            onRemoveButtonClick={() =>
              TodoStore.removeTodoItem(todoItem.todoID)
            }
            onTodoItemDoublecClick={() => {
              TodoStore.currentTodoItem = todoItem;
              TodoStore.isInEditMode = true;
            }}
            serialNumber={index + 1}
          />
        ))
      )}
    </React.Fragment>
  );
};

export default observer(TodoList);
