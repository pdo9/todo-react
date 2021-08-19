import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList(props) {
  return (
    <ul style={{ listStyle: 'none', padding: '0' }}>
      {props.todoList.map((todoItem) => {
        return (
          <TodoItem
            todoItem={todoItem}
            key={todoItem.id}
            onChange={props.onCheckBoxClick}
          />
        );
      })}
    </ul>
  );
}
