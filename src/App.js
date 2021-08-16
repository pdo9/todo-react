import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import FooterBase from './components/base/FooterBase';
import HeaderBase from './components/base/HeaderBase';
import SidebarBase from './components/base/SidebarBase';
import Context from './components/context';

//let todoList = getTodoList();

function App() {
  let [todoList, setTodoListState] = React.useState(getTodoList());

  //получение списка todo
  function getTodoList() {
    let todoList = [
      { id: 1, isActive: true, text: 'note1' },
      { id: 2, isActive: false, text: 'note2' },
      { id: 3, isActive: true, text: 'note3' },
      { id: 4, isActive: true, text: 'note4' },
      { id: 5, isActive: true, text: 'note5' },
    ];

    return todoList;
  }

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

  function removeTodoItem(id) {
    setTodoListState(todoList.filter((todoItem) => todoItem.id !== id));
    console.log('removed id = ', id);
  }

  //изменение статуса элемента todo
  function changeTodoItemStatus(id) {
    console.log('todo id = ', id);
    /*
    todoList = todoList.map(() => {
      if (todoList.id === id) {
        todoList.isActive = !todoList.isActive;
      }
      return todoList;
    });
    */
    setTodoListState(
      todoList.map((todoItem) => {
        if (todoItem.id === id) {
          todoItem.isActive = !todoItem.isActive;
        }
        return todoItem;
      })
    );
  }

  return (
    <Context.Provider value={{ removeTodoItem: removeTodoItem }}>
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
                <div name='todolist-text'>
                  <p>Мои заметки:</p>

                  {console.log('todoList.Length = ', todoList.length)}
                  {todoList.length ? (
                    <TodoList
                      todoList={todoList}
                      onCheckBoxClick={changeTodoItemStatus}
                    ></TodoList>
                  ) : (
                    <p>У вас нет созданных заметок.</p>
                  )}
                </div>
              </div>
            </div>
          </main>
        </div>

        {/* Footer */}
        <FooterBase />
      </div>
    </Context.Provider>
  );
}

export default App;
