import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import FooterBase from './components/base/FooterBase';
import HeaderBase from './components/base/HeaderBase';
import SidebarBase from './components/base/SidebarBase';

export default function App() {
  return (
    <div className='page'>
      {/* Header */}
      <HeaderBase />

      {/* Columns */}
      <div className='content-columns'>
        {/* Sidebar */}
        <SidebarBase />

        {/* Main */}
        <main className='main'>
          <div className='main-content'>
            <div className='main-text'>
              {/* Form */}
              <div className='form-division'>
                <form
                  action='#'
                  method='post'
                  name='main-form'
                  className='main-form'
                >
                  <label htmlFor='input_todo' className='label_add_todo'>
                    Добавить в список:
                  </label>
                  <input
                    type='text'
                    name='input_todo'
                    id='input_todo'
                    className='form-input'
                  />
                  <button
                    type='submit'
                    name='input_button'
                    id='input_button'
                    className='form-button'
                  >
                    Добавить
                  </button>
                </form>
              </div>

              {/* TODO List */}
              <div name='todolist-text' className='todolist-text'>
                <p>Мои заметки:</p>
                <TodoList todoList={getTodoList()}></TodoList>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <FooterBase />
    </div>
  );
}

function getTodoList() {
  let todoList = [
    { todoItemID: 1, todoItemStatus: true, todoItemText: 'note1' },
    { todoItemID: 2, todoItemStatus: true, todoItemText: 'note2' },
    { todoItemID: 3, todoItemStatus: true, todoItemText: 'note3' },
    { todoItemID: 4, todoItemStatus: true, todoItemText: 'note4' },
    { todoItemID: 5, todoItemStatus: true, todoItemText: 'note5' },
  ];

  return todoList;
}
