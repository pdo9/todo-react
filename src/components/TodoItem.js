import React from 'react';

export default function TodoItem(props) {
  return (
    <div className='todo-item-container'>
      <span>
        <input
          type='checkBox'
          onChange={() => props.onChange(props.todoItem.id)}
        />
      </span>
      <li className='todo-item'>{getTodoItemText(props)}</li>
      <button>&times;</button>
    </div>
  );
}

function getTodoItemText(props) {
  let text = `${props.todoItem.text}`;
  return text;
}
