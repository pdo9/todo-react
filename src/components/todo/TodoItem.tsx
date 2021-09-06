import React from 'react';
import { observer } from 'mobx-react-lite';
import { ITodoItem } from '../stores/TodoStore';

type TProps = {
  todoItem: ITodoItem;
  serialNumber: number;
  onCheckBoxClick: () => void;
  onRemoveButtonClick: () => void;
  onTodoItemDoublecClick: () => void;
};

/**
 * Элемент todo
 */
const TodoItem: React.FC<TProps> = (props) => {
  return (
    <div
      className='todo-item'
      onDoubleClick={() => props.onTodoItemDoublecClick()}
    >
      <div>
        <input
          type='checkBox'
          checked={props.todoItem.isCompleted}
          onChange={() => props.onCheckBoxClick()}
        ></input>
      </div>
      <div>
        <strong>
          {props.serialNumber}
          {'. '} [id={props.todoItem.todoID}] [userID={props.todoItem.userID}]{' '}
        </strong>
        {props.todoItem.todoText}
      </div>
      <div className='todo-item-remove-button'>
        <button onClick={() => props.onRemoveButtonClick()}>x</button>
      </div>
    </div>
  );
};

export default observer(TodoItem);
