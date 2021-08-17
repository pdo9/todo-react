import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import FooterBase from './components/baseContent/FooterContent';
import HeaderBase from './components/baseContent/HeaderContent';
import SidebarBase from './components/baseContent/SidebarContent';
import Context from './components/context';
import TodoInpunt from './components/TodoInput';
import { BrowserRouter, Rioute, Switch } from 'react-dom';

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
  function addTodoItem(text) {
    /*
    todoList[todoList.length] = {
      id: todoList.length + 1,
      isActive: true,
      text: text,
    };
    console.log(text);
    console.log(todoList);
    */
    setTodoListState(
      todoList.concat([
        {
          id: todoList.length + 1,
          isActive: true,
          text: text,
        },
      ])
    );
  }

  function removeTodoItem(id) {
    setTodoListState(todoList.filter((todoItem) => todoItem.id !== id));
    console.log('removed id = ', id);
  }

  //изменение статуса элемента todo
  function changeTodoItemStatus(id) {
    console.log('todo id = ', id);
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
              {/* Form */}
              <div name='form-add-todo'>
                <TodoInpunt onCreate={addTodoItem} />
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
          </main>
        </div>

        {/* Footer */}
        <FooterBase />
      </div>
    </Context.Provider>
  );
}

export default App;
