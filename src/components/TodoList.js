import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList(props) {
  {
    if (props.todoList) {
      return (
        <span>
          <ol className='.todolist-text'>
            {props.todoList.map((todoItem) => {
              return <TodoItem todoItem={todoItem} />;
            })}
          </ol>
        </span>
      );
    } else {
      return (
        <span>
          <p>Вы еще не создали ни одной заметки!</p>
        </span>
      );
    }
  }
}
