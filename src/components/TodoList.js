import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList(props) {
  /*
  if (props.todoList) {
    return (
      <ul>
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
  } else {
    return (
      <span>
        <p>Вы еще не создали ни одной заметки!</p>
      </span>
    );
  }
  */
  return (
    <ul>
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
