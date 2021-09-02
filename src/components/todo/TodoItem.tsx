import React from 'react';
import { observer } from 'mobx-react-lite';
import { TTodo } from '../stores/TodoStore';

type TProps = {
  todoItem: TTodo;
  serialNumber: number;
  onCheckBoxClick: () => void;
  onRemoveButtonClick: () => void;
};

const TodoItem: React.FC<TProps> = (props): React.ReactElement => {
  return (
    <div className='todo-item'>
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
          {'. '} [todoID={props.todoItem.todoID}] [userID=
          {props.todoItem.userID}]{' '}
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
