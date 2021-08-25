import React, { Fragment } from 'react';
import TodoInpunt from '../TodoInput';
import TodoList from '../TodoList';
import todoContext from '../todoContext';
import TodoObject from '../todoStorage/TodoObject';
import TodoStorage from '../todoStorage/TodoStorage';

const KEY_AUTHORIZED_USER_NAME = 'userName';

export const Home = () => {
  const storage = new TodoStorage();
  const [todoList, setTodoListState] = React.useState(getTodoList());
  const inputElementRef = React.useRef();

  //получение списка todo
  function getTodoList() {
    return storage.getTodosFromStorage();
  }

  //добавление/имзенение элемента todo
  function todoInputHandle(text) {
    if (!inputElementRef.current.todoID) {
      let todoObject = new TodoObject({
        id: Date.now(),
        isActive: true,
        text: text,
      });

      setTodoListState(todoList.concat([todoObject]));
      todoObject.saveIntoLocalStorage();
    } else {
      setTodoListState(
        todoList.map((todoItem) => {
          if (todoItem.id === inputElementRef.current.todoID) {
            todoItem.text = text;

            storage.setTodoIntoStorage(
              'todoObject' + inputElementRef.current.todoID,
              todoItem
            );
            console.log('changed todo item:', todoItem);
          }

          return todoItem;
        })
      );
    }
  }

  //удаление элемента todo из списка
  function removeTodoItem(id) {
    let key = 'todoObject';
    setTodoListState(todoList.filter((todoItem) => todoItem.id !== id));
    key += id.toString();
    storage.removeTodoFromStorage(key);
    console.log('removed id = ', id);
  }

  //изменение статуса элемента todo
  function changeTodoItemStatus(id) {
    let key = 'todoObject';

    setTodoListState(
      todoList.map((todoItem) => {
        if (todoItem.id === id) {
          todoItem.isActive = !todoItem.isActive;

          storage.setTodoIntoStorage(
            key + id.toString(),
            new TodoObject({
              id: todoItem.id,
              isActive: todoItem.isActive,
              text: todoItem.text,
            })
          );

          console.log('changed todo = ', todoItem);
        }

        return todoItem;
      })
    );
  }

  //установка фокуса в окно ввода
  function todoInputSetFocus(id) {
    inputElementRef.current.focus();
    inputElementRef.current.todoID = id;

    todoList.map((todoItem) => {
      if (todoItem.id === id) {
        inputElementRef.current.value = todoItem.text;
        console.log('selected todo item: ', todoItem);
        inputElementRef.current.todoID = todoItem.id;
      }

      return todoItem;
    });
  }

  return (
    <Fragment>
      <todoContext.Provider value={{ removeTodoItem: removeTodoItem }}>
        <div>
          <div>
            <p>
              Добро пожаловать, {localStorage.getItem(KEY_AUTHORIZED_USER_NAME)}
              !
            </p>
            <TodoInpunt ref={inputElementRef} onEdit={todoInputHandle} />
          </div>

          <div>
            <p>Мои заметки:</p>

            {console.log('todoList.Length = ', todoList.length)}
            {todoList.length ? (
              <TodoList
                todoList={todoList}
                onCheckBoxClick={changeTodoItemStatus}
                onDoubleClickItem={todoInputSetFocus}
              ></TodoList>
            ) : (
              <p>У вас нет созданных заметок.</p>
            )}
          </div>
        </div>
      </todoContext.Provider>
    </Fragment>
  );
};
