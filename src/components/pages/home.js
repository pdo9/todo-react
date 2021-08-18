import React, { Fragment } from 'react';

import TodoInpunt from '../TodoInput';
import TodoList from '../TodoList';
import Context from '../context';

export const Home = () => {
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

  //удаление элемента todo из списка
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
    <Fragment>
      <Context.Provider value={{ removeTodoItem: removeTodoItem }}>
        <div>
          <div>
            <TodoInpunt onCreate={addTodoItem} />
          </div>

          <div>
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
      </Context.Provider>
    </Fragment>
  );
};
