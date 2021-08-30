import React from 'react';
import { observer } from 'mobx-react-lite';
import TodoItem from './TodoItem';
import TodoStore from '../stores/TodoStore';

type TProps = {
  title: string;
};

const TodoList: React.FC<TProps> = ({ title }) => {
  React.useEffect(() => {
    TodoStore.getTodoList();
  }, []);

  return (
    <React.Fragment>
      <h2 style={{ textAlign: 'center' }}>{title}</h2>

      {TodoStore.todoList.map((todoItem, index) => (
        <TodoItem
          key={todoItem.todoID}
          todoItem={todoItem}
          // isChecked={todoItem.isCompleted}
          onCheckBoxClick={() =>
            TodoStore.changeTodoItemStatus(todoItem.todoID)
          }
          onRemoveButtonClick={() => TodoStore.removeTodoItem(todoItem.todoID)}
          serialNumber={index + 1}
        />
      ))}
    </React.Fragment>
  );
};

export default observer(TodoList);
