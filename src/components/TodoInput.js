import React from 'react';

/*
export default function TodoInpunt(props, ref) {
  let [todoInputValue, setTodoInputValue] = React.useState('');

  function submitEventHandler(event) {
    event.preventDefault();

    if (todoInputValue.trim()) {
      props.onCreate(todoInputValue);
      setTodoInputValue('');
    }
  }

  return (
    <form
      className='todo-input'
      onSubmit={submitEventHandler}
      style={{ margin: '10px 0px' }}
    >
      <input
        value={todoInputValue}
        onChange={(event) => setTodoInputValue(event.target.value)}
        placeholder='Введите текст заметки'
        ref={ref}
      />
      <button type='submit' style={{ margin: '10px' }}>
        Добавить
      </button>
    </form>
  );
}
*/

function TodoInpunt(props, ref) {
  let [todoInputValue, setTodoInputValue] = React.useState('');

  function submitEventHandler(event) {
    event.preventDefault();

    if (todoInputValue.trim()) {
      props.onEdit(todoInputValue);
      //props.onCreate(todoInputValue);
      //props.getTodoItem();
      setTodoInputValue('');
    }
  }

  return (
    <form
      className='todo-input'
      onSubmit={submitEventHandler}
      style={{ margin: '10px 0px' }}
    >
      <input
        value={todoInputValue}
        onChange={(event) => setTodoInputValue(event.target.value)}
        placeholder='Введите текст заметки'
        ref={ref}
      />
      <button type='submit' style={{ margin: '10px' }}>
        Добавить
      </button>
    </form>
  );
}

export default React.forwardRef(TodoInpunt);
