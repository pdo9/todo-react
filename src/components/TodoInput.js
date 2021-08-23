import React from 'react';

function TodoInpunt(props, ref) {
  let [todoInputValue, setTodoInputValue] = React.useState('');

  function submitEventHandler(event) {
    event.preventDefault();

    console.log('todoID', ref.current.todoID);

    if (todoInputValue.trim()) {
      props.onEdit(todoInputValue);
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
