import React from 'react';
import { observer } from 'mobx-react-lite';
import TodoItem from './TodoItem';
import TodoStore from '../stores/TodoStore';
import AuthStore from '../stores/AuthStore';

type TProps = {
  title: string;
};

/**
 * Список todo
 */
const TodoList: React.FC<TProps> = ({ title }): React.ReactElement => {
  React.useEffect(() => {
    TodoStore.getTodoList();
  }, []);

  return (
    <React.Fragment>
      <h2 style={{ textAlign: 'center' }}>{title}</h2>

      {TodoStore.todoList
        .filter(
          (itemByUserID) => itemByUserID.userID === AuthStore.authState.userID
        )
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
            serialNumber={index + 1}
          />
        ))}
    </React.Fragment>
  );
};

export default observer(TodoList);
