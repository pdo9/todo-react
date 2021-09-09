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
    //const getTodoList = (/* event: StorageEvent */) => TodoStore.getTodoList();
    // const log = (event: StorageEvent) => {
    //   console.log(event);
    // };
    // window.addEventListener('storage', log);

    const getTodoList = (event: StorageEvent) => {
      if (event.key === LOCALSTORAGE_KEYS.KEY_TODO) {
        TodoStore.getTodoList();
      }

      console.log(event);
    };

    window.addEventListener('storage', getTodoList);
    // window.addEventListener('storage', TodoStore.getTodoList);

    return () => {
      // window.removeEventListener('storage', log);
      // window.addEventListener('storage', TodoStore.getTodoList);
      window.addEventListener('storage', getTodoList);
    };
  }, [TodoStore.isInEditMode]); //eslint-disable-line

  return (
    <React.Fragment>
      <h2
        style={{ textAlign: 'center' }}
      >{`Ваш список заметок, ${AuthStore.authState.userName}:`}</h2>

      {TodoStore.todoList.map((todoItem, index) => (
        // TodoStore.filteredTodoList.map((todoItem, index) => (
        <TodoItem
          key={todoItem.todoID}
          todoItem={todoItem}
          onCheckBoxClick={() =>
            TodoStore.changeTodoItemStatus(todoItem.todoID)
          }
          onRemoveButtonClick={() => TodoStore.removeTodoItem(todoItem.todoID)}
          onTodoItemDoublecClick={() => {
            TodoStore.currentTodoItem = todoItem;
            TodoStore.isInEditMode = true;
          }}
          serialNumber={index + 1}
        />
      ))}
    </React.Fragment>
  );
};

export default observer(TodoList);
