import React, { Fragment } from 'react';
import { observer } from 'mobx-react-lite';
import TodoList from '../todo/TodoList';
import TodoStore from '../stores/TodoStore';

const Home = () => {
  let currentUserID = 1;

  const [newTodoItem, setNewTodoItem] = React.useState({
    userID: 0,
    todoID: 0,
    isCompleted: false,
    todoText: '',
  });

  const addNewTodoItem = (event) => {
    event.preventDefault();
    TodoStore.addTodoItem(newTodoItem);
    setNewTodoItem({
      userID: 0,
      todoID: 0,
      isCompleted: false,
      todoText: '',
    });
  };

  return (
    <Fragment>
      <form>
        <div>
          <input
            className='todo-input'
            placeholder='Введите текст заметки'
            value={newTodoItem.todoText}
            onChange={(event) =>
              setNewTodoItem({
                userID: currentUserID,
                todoID: Date.now(),
                isCompleted: false,
                todoText: event.target.value,
              })
            }
          ></input>
        </div>
        <div>
          <button className='todo-input-button' onClick={addNewTodoItem}>
            Добавить
          </button>
        </div>
      </form>
      {/* <TodoList title='Ваш список заметок:' todoList={TodoStore.todoList} /> */}
      <TodoList
        title='Ваш список заметок:'
        // todoList={TodoStore.getTodoList()}
      />
    </Fragment>
  );
};

export default observer(Home);

// import React, { Fragment } from 'react';
// // import TodoFormInput from '../todo/TodoFormInput';
// import TodoList from '../todo/TodoList';
// // import TodoInpunt from '../TodoInput';
// // import TodoList from '../TodoList';
// // import todoContext from '../todoContext';
// // import TodoObject from '../todoStorage/TodoObject';
// // import TodoStorage from '../todoStorage/TodoStorage';

// import { TodoStore } from '../stores/todoStore';

// const todoStore = new TodoStore();

// export const Home = () => {
//   const [todoList, setTodoList] = React.useState([
//     { userID: 1, todoID: 1, isCompleted: false, todoText: '111' },
//     { userID: 1, todoID: 2, isCompleted: false, todoText: '222' },
//     { userID: 1, todoID: 3, isCompleted: false, todoText: '333' },
//     // { userID: 1, todoID: 4, isCompleted: false, todoText: '444' },
//     // { userID: 1, todoID: 5, isCompleted: false, todoText: '555' },
//     // { userID: 2, todoID: 6, isCompleted: false, todoText: '111111' },
//     // { userID: 2, todoID: 7, isCompleted: false, todoText: '222222' },
//     // { userID: 2, todoID: 8, isCompleted: false, todoText: '333333' },
//     // { userID: 2, todoID: 9, isCompleted: false, todoText: '444444' },
//     // { userID: 2, todoID: 10, isCompleted: false, todoText: '555555' },
//     // { userID: 3, todoID: 11, isCompleted: false, todoText: '111111111' },
//     // { userID: 3, todoID: 12, isCompleted: false, todoText: '222222222' },
//     // { userID: 3, todoID: 13, isCompleted: false, todoText: '333333333' },
//     // { userID: 3, todoID: 14, isCompleted: false, todoText: '444444444' },
//     // { userID: 3, todoID: 15, isCompleted: false, todoText: '555555555' },
//   ]);

//   //console.log('todoList:', todoList);

//   const [todoItem, setTodoItem] = React.useState({
//     userID: 0,
//     todoID: 0,
//     isCompleted: false,
//     todoText: '',
//   });

//   const addNewTodoItem = (event) => {
//     event.preventDefault();
//     const currentUser = 1;

//     setTodoList([
//       ...todoList,
//       {
//         ...todoItem,
//         userID: currentUser,
//         todoID: Date.now(),
//       },
//     ]);

//     setTodoItem({
//       userID: 0,
//       todoID: 0,
//       isCompleted: false,
//       todoText: '',
//     });
//   };

//   return (
//     <Fragment>
//       {/* <TodoFormInput /> */}
//       <form>
//         <div>
//           <input
//             className='todo-input'
//             placeholder='Введите текст заметки'
//             value={todoItem.todoText}
//             onChange={(event) =>
//               setTodoItem({ ...todoItem, todoText: event.target.value })
//             }
//           ></input>
//         </div>
//         <div>
//           <button className='todo-input-button' onClick={addNewTodoItem}>
//             Добавить
//           </button>
//         </div>
//       </form>
//       <TodoList todoList={todoList} title='Ваш список заметок:' />
//     </Fragment>
//   );
// };

// import React, { Fragment } from 'react';
// import TodoInpunt from '../TodoInput';
// import TodoList from '../TodoList';
// import todoContext from '../todoContext';
// import TodoObject from '../todoStorage/TodoObject';
// import TodoStorage from '../todoStorage/TodoStorage';

// const KEY_AUTHORIZED_USER_NAME = 'userName';

// export const Home = /*observer*/ () => {
//   const storage = new TodoStorage();
//   const [todoList, setTodoListState] = React.useState(getTodoList());
//   const inputElementRef = React.useRef();

//   //получение списка todo
//   function getTodoList() {
//     return storage.getTodosFromStorage();
//   }

//   //добавление/имзенение элемента todo
//   function todoInputHandle(text) {
//     if (!inputElementRef.current.todoID) {
//       let todoObject = new TodoObject({
//         id: Date.now(),
//         isActive: true,
//         text: text,
//       });

//       setTodoListState(todoList.concat([todoObject]));
//       todoObject.saveIntoLocalStorage();
//     } else {
//       setTodoListState(
//         todoList.map((todoItem) => {
//           if (todoItem.id === inputElementRef.current.todoID) {
//             todoItem.text = text;

//             storage.setTodoIntoStorage(
//               'todoObject' + inputElementRef.current.todoID,
//               todoItem
//             );
//             console.log('changed todo item:', todoItem);
//           }

//           return todoItem;
//         })
//       );
//     }
//   }

//   //удаление элемента todo из списка
//   function removeTodoItem(id) {
//     let key = 'todoObject';
//     setTodoListState(todoList.filter((todoItem) => todoItem.id !== id));
//     key += id.toString();
//     storage.removeTodoFromStorage(key);
//     console.log('removed id = ', id);
//   }

//   //изменение статуса элемента todo
//   function changeTodoItemStatus(id) {
//     let key = 'todoObject';

//     setTodoListState(
//       todoList.map((todoItem) => {
//         if (todoItem.id === id) {
//           todoItem.isActive = !todoItem.isActive;

//           storage.setTodoIntoStorage(
//             key + id.toString(),
//             new TodoObject({
//               id: todoItem.id,
//               isActive: todoItem.isActive,
//               text: todoItem.text,
//             })
//           );

//           console.log('changed todo = ', todoItem);
//         }

//         return todoItem;
//       })
//     );
//   }

//   //установка фокуса в окно ввода
//   function todoInputSetFocus(id) {
//     inputElementRef.current.focus();
//     inputElementRef.current.todoID = id;

//     todoList.map((todoItem) => {
//       if (todoItem.id === id) {
//         inputElementRef.current.value = todoItem.text;
//         console.log('selected todo item: ', todoItem);
//         inputElementRef.current.todoID = todoItem.id;
//       }

//       return todoItem;
//     });
//   }

//   return (
//     <Fragment>
//       <todoContext.Provider value={{ removeTodoItem: removeTodoItem }}>
//         <div>
//           <div>
//             <p>
//               Добро пожаловать, {localStorage.getItem(KEY_AUTHORIZED_USER_NAME)}
//               !
//             </p>
//             <TodoInpunt ref={inputElementRef} onEdit={todoInputHandle} />
//           </div>

//           <div>
//             <p>Мои заметки:</p>

//             {console.log('todoList.Length = ', todoList.length)}
//             {todoList.length ? (
//               <TodoList
//                 todoList={todoList}
//                 //todoList2={todoStore.getTodoList}
//                 onCheckBoxClick={changeTodoItemStatus}
//                 onDoubleClickItem={todoInputSetFocus}
//               ></TodoList>
//             ) : (
//               <p>У вас нет созданных заметок.</p>
//             )}
//           </div>
//         </div>
//       </todoContext.Provider>
//     </Fragment>
//   );
// };
