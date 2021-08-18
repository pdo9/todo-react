import React from 'react';

export default function TodoInpunt(props) {
  let [todoInputValue, setTodoInputValue] = React.useState('');
  //todoInputValue = 'Введите текст заметки';

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
      />
      <button type='submit' style={{ margin: '10px' }}>
        Добавить
      </button>
    </form>
  );
}
