import React from 'react';

export default function TodoItem(props, onChange) {
  return (
    <div className='todoItemContainer'>
      <span>
        <input type='checkBox' onChange={() => onChange(props.todoItem.id)} />
      </span>
      <li className='todoitem'>{getTodoItemText(props)}</li>
      <button>&times;</button>
    </div>
  );
}

function getTodoItemText(props) {
  let text = `${props.todoItem.text}`;
  return text;
}
