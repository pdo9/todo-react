// import React from 'react';

// const TodoFormInput = (props) => {
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
//     <form>
//       <div>
//         <input
//           className='todo-input'
//           placeholder='Введите текст заметки'
//           value={todoItem.todoText}
//           onChange={(event) =>
//             setTodoItem({ ...todoItem, todoText: event.target.value })
//           }
//         ></input>
//       </div>
//       <div>
//         <button className='todo-input-button' onClick={addNewTodoItem}>
//           Добавить
//         </button>
//       </div>
//     </form>
//   );
// };

// export default TodoFormInput;
