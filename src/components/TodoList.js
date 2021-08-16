import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList(props) {
  if (props.todoList) {
    return (
      <ol className='.todolist-text'>
        {props.todoList.map((todoItem) => {
          return (
            <TodoItem
              todoItem={todoItem}
              key={todoItem.id}
              onChange={props.onCheckBoxClick}
            />
          );
        })}
      </ol>
    );
  } else {
    return (
      <span>
        <p>Вы еще не создали ни одной заметки!</p>
      </span>
    );
  }
}
