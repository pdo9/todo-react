// import React, { Fragment } from 'react';
// import { useHistory } from 'react-router-dom';
// import useAuth from '../old_auth/old_useAuth';

// const KEY_AUTHORIZED_USER_NAME = 'userName';

// export const Logout = () => {
//   let history = useHistory();
//   let auth = useAuth();

//   console.log('history:', history);
//   console.log('auth', auth);

//   return auth.user ? (
//     <Fragment>
//       <p>
//         Желаете выйти из системы,{' '}
//         {localStorage.getItem(KEY_AUTHORIZED_USER_NAME)}?
//       </p>
//       <p>
//         <button
//           style={{ height: '40px', width: '100px' }}
//           onClick={() => {
//             auth.signout(() => history.push('/'));
//           }}
//         >
//           Выход
//         </button>
//       </p>
//     </Fragment>
//   ) : (
//     <Fragment>
//       <h1>Вы не авторизованы</h1>
//     </Fragment>
//   );
// };
