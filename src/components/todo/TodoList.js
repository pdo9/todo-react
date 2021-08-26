import React from 'react';
import { observer } from 'mobx-react-lite';
import TodoItem from './TodoItem';
import TodoStore from '../stores/TodoStore';

const TodoList = ({ todoList, title }) => {
  return (
    <React.Fragment>
      <h2 style={{ textAlign: 'center' }}>{title}</h2>

      {todoList.map((todoItem, index) => (
        <TodoItem
          key={todoItem.todoID}
          todoItem={todoItem}
          isChecked={todoItem.isCompleted}
          onCheckBoxClick={() =>
            TodoStore.changeTodoItemStatus(todoItem.todoID)
          }
          onRemoveButtonClick={() => TodoStore.removeTodoItem(todoItem.todoID)}
          number={index + 1}
        />
      ))}
    </React.Fragment>
  );
};

export default observer(TodoList);
