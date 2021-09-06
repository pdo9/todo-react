import React from 'react';
import { observer } from 'mobx-react-lite';
import TodoItem from './TodoItem';
import TodoStore from '../stores/TodoStore';
import AuthStore from '../stores/AuthStore';

/**
 * Список todo
 */
const TodoList: React.FC = () => {
  React.useEffect(() => {
    const log = (event: StorageEvent) => {
      console.log(event);
    };

    window.addEventListener('storage', log);
    TodoStore.getTodoList();
    return () => {
      window.removeEventListener('storage', log);
    };
  }, []);

  return (
    <React.Fragment>
      <h2
        style={{ textAlign: 'center' }}
      >{`Ваш список заметок, ${AuthStore.authState.userName}:`}</h2>

      {
        //TodoStore.todoList
        TodoStore.filteredTodoList
          // .filter(
          //   (itemByUserID) => itemByUserID.userID === AuthStore.authState.userID
          // )
          .map((todoItem, index) => (
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
      }
    </React.Fragment>
  );
};

export default observer(TodoList);
