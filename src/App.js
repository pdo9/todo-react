import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import FooterBase from './components/base/FooterBase';
import HeaderBase from './components/base/HeaderBase';
import SidebarBase from './components/base/SidebarBase';

function App() {
  //изменение статуса элемента todo
  function changeTodoItemStatus(id) {
    console.log(id);
  }

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
                  //action='#'
                  //method='post'
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
                    onClick={() =>
                      addTodoItem(
                        todoList,
                        document.querySelector('#input_todo').value
                      )
                    }
                  >
                    Добавить
                  </button>
                </form>
              </div>

              {/* TODO List */}
              <div name='todolist-text' className='todolist-text'>
                <p>Мои заметки:</p>
                <TodoList
                  todoList={todoList}
                  onCheckBoxClick={changeTodoItemStatus}
                ></TodoList>
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

//получение списка todo
function getTodoList() {
  let todoList = [
    { id: 1, isActive: true, text: 'note1' },
    { id: 2, isActive: true, text: 'note2' },
    { id: 3, isActive: true, text: 'note3' },
    { id: 4, isActive: true, text: 'note4' },
    { id: 5, isActive: true, text: 'note5' },
  ];

  return todoList;
}

let todoList = getTodoList();

//добавление элемента в todo-список
function addTodoItem(todoList, text) {
  todoList[todoList.length] = {
    id: todoList.length + 1,
    isActive: true,
    text: text,
  };
  console.log(text);
  console.log(todoList);
}

export default App;
