import React from 'react';
import TodoItem from './TodoItem';
import { getTodoStore } from './stores/todoStore';
import { observer } from 'mobx-react';

const todoStore = getTodoStore();

export default observer(function TodoList(props) {
  console.log(todoStore.todoList.length);
  React.useEffect(() => {
    console.log('getTodo');
    todoStore.getTodosItems();
  }, []);

  return (
    <ul style={{ listStyle: 'none', padding: '0' }}>
      {todoStore.todoList.map((todoItem) => {
        return (
          <TodoItem
            key={todoItem.id}
            todoItem={todoItem}
            onChange={props.onCheckBoxClick}
            onDoubleClick={props.onDoubleClickItem}
          />
        );
      })}
    </ul>
  );
});
