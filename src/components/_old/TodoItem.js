import React, { useContext } from 'react';
import todoContext from './todoContext';
//import { observer } from 'mobx-react';

export default (function TodoItem(props) {
  //console.log(props.todoItem);

  let todoItemClassName = props.todoItem.isActive
    ? 'todo-item'
    : 'todo-item-done';

  let { removeTodoItem } = useContext(todoContext);

  return (
    <li
      className={todoItemClassName}
      style={{ display: 'flex', justifyContent: 'space-between' }}
      onDoubleClick={() => props.onDoubleClick(props.todoItem.id)}
    >
      <span>
        <input
          type='checkBox'
          checked={!props.todoItem.isActive}
          onChange={() => props.onChange(props.todoItem.id)}
        />
        &nbsp;
        {getTodoItemText(props)}
      </span>
      <button onClick={removeTodoItem.bind(null, props.todoItem.id)}>
        &times;
      </button>
    </li>
  );
});

function getTodoItemText(props) {
  let text = `${props.todoItem.text}`;
  return text;
}
