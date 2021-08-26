import React from 'react';
import { observer } from 'mobx-react-lite';

const TodoItem = (props) => {
  return (
    <React.Fragment>
      <div className='todo-item'>
        <div>
          <input
            type='checkBox'
            checked={props.isChecked}
            onChange={() => props.onCheckBoxClick()}
          ></input>
        </div>
        <div>
          <strong>
            {props.number}
            {'. '} [id={props.todoItem.todoID}]{' '}
          </strong>
          {props.todoItem.todoText}
        </div>
        <div className='todo-item-remove-button'>
          <button onClick={() => props.onRemoveButtonClick()}>x</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default observer(TodoItem);
