// import React, { Fragment } from 'react';
// import { useHistory, useLocation } from 'react-router-dom';
// import useAuth from '../auth/useAuth';

// const KEY_AUTHORIZED_USER_NAME = 'userName';

// export const Login = () => {
//   let history = useHistory();
//   let location = useLocation();
//   let auth = useAuth();

//   let { from } = location.state || { from: { pathname: '/' } };

//   let [userName, setUserName] = React.useState('');

//   let login = () => {
//     auth.signin(() => {
//       history.replace(from);
//     });
//   };

//   function loginSubmitEventHandler(event) {
//     //event.preventDefault();
//     login();
//     localStorage.setItem(KEY_AUTHORIZED_USER_NAME, userName);

//     console.log('currentUserName: ', userName);
//   }

//   return (
//     <Fragment>
//       <form onSubmit={loginSubmitEventHandler}>
//         <p>Вам необходимо авторизоваться {/*{from.pathname}*/}</p>
//         <input
//           type='text'
//           placeholder='Введите имя пользователя'
//           onChange={(event) => setUserName(event.target.value)}
//           //onChange={(event) => loginSubmitEventHandler(event.target.value)}
//         ></input>
//         <p>
//           <button
//             style={{ height: '40px', width: '100px' }}
//             //onClick={login}
//             type='submit'
//           >
//             Вход
//           </button>
//         </p>
//       </form>
//     </Fragment>
//   );
// };
