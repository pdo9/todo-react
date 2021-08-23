import React, { Fragment } from 'react';
import TodoInpunt from '../TodoInput';
import TodoList from '../TodoList';
import Context from '../context';
import TodoObject from '../todoStorage/TodoObject';
import TodoStorage from '../todoStorage/TodoStorage';

export const Home = () => {
  const storage = new TodoStorage();
  const [todoList, setTodoListState] = React.useState(getTodoList());
  const inputElementRef = React.useRef();

  var selectedID = 0;

  //получение списка todo
  function getTodoList() {
    return storage.getTodosFromStorage();
  }

  /*
  //добавление элемента в todo-список
  function addTodoItem(text) {
    let todoObject = new TodoObject({
      id: Date.now(),
      isActive: true,
      text: text,
    });

    setTodoListState(todoList.concat([todoObject]));

    todoObject.saveIntoLocalStorage();
  }
  */

  //добавление/имзенение элемента todo
  function todoInputHandle(text) {
    if (selectedID === 0) {
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
          if (todoItem.id === selectedID) {
            todoItem.text = text;
            storage.setTodoIntoStorage('todoObject' + selectedID, todoItem);
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

    todoList.map((todoItem) => {
      if (todoItem.id === id) {
        inputElementRef.current.value = todoItem.text;
        console.log('selected todo item: ', todoItem);
        selectedID = todoItem.id;
      }

      return todoItem;
    });
  }

  /*
  //возвращает объект todoItem по его id
  function getTodoItem(id) {
    let selectedTodoItem = null;

    if (!id) {
      return null;
    }

    todoList.map((todoItem) => {
      if (todoItem.id === id) {
        selectedTodoItem = new TodoObject(todoItem);
      }

      return todoItem;
    });

    return selectedTodoItem;
  }
  */

  /*
  //изменение текста элемента todo
  function changeTodoItemText(id) {
    const selectedTodoItem = getTodoItem(id);
    console.log('changeTodoItemText - selected todo item: ', selectedTodoItem);

    setTodoListState(
      todoList.map((todoItem) => {
        if (todoItem.id === id) {
          inputElementRef.current.value = todoItem.text;

          storage.setTodoIntoStorage(
            'todoObject' + id.toString(),
            new TodoObject({
              id: todoItem.id,
              isActive: todoItem.isActive,
              text: inputElementRef.current.value,
            })
          );
        }

        return todoItem;
      })
    );
  }
  */

  return (
    <Fragment>
      <Context.Provider value={{ removeTodoItem: removeTodoItem }}>
        <div>
          <div>
            <TodoInpunt
              ref={inputElementRef}
              onEdit={todoInputHandle}
              //todoObject={getTodoItem}
            />
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
      </Context.Provider>
    </Fragment>
  );
};
