import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import FooterBase from './components/base/FooterBase';
import HeaderBase from './components/base/HeaderBase';

function App() {
  return (
    <div className='page'>
      {/* Header */}
      <HeaderBase />

      {/* Columns */}
      <div className='content-columns'>
        {/* Sidebar */}
        <aside className='sidebar'>
          <nav className='nav'>
            <a className='nav-link' href='#'>
              На главную
            </a>
            <a className='nav-link' href='#'>
              Мои списки
            </a>
            <a className='nav-link' href='#'>
              Пользователь
            </a>
            <a className='nav-link' href='#'>
              Выход
            </a>
          </nav>
        </aside>

        {/* Main */}
        <main className='main'>
          <div className='main-content'>
            <div className='main-text'>
              <p>This is todo-application prototype. Work in progress.</p>

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
                <p>Мой список дел:</p>
                <TodoList></TodoList>
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

export default App;
