import React from 'react';
import TodoItem from './TodoItem';
//import { observer } from 'mobx-react';

export default (function TodoList(props) {
  //console.dir(props.todoList);

  return (
    <ul style={{ listStyle: 'none', padding: '0' }}>
      {props.todoList.map((todoItem) => {
        return (
          <TodoItem
            todoItem={todoItem}
            key={todoItem.id}
            onChange={props.onCheckBoxClick}
            onDoubleClick={props.onDoubleClickItem}
          />
        );
      })}
    </ul>
  );
});
