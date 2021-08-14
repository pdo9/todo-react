import React from 'react';

export default function TodoItem(props) {
  return <li className='todoitem'>{getTodoItemText(props)}</li>;
}

function getTodoItemText(props) {
  let text = `${props.todoItem.todoItemText}`;
  return text;
}
