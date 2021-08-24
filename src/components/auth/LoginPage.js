import React from 'react';
import {
  //BrowserRouter,
  //Switch,
  //Route,
  //Link,
  //Redirect,
  useHistory,
  useLocation,
} from 'react-router-dom';

import useAuth from './useAuth';
//import { currentUserName } from './currentUserName';
//import { authContext } from './authContext';

const KEY_AUTHORIZED_USER_NAME = 'userName';

export default function LoginPage() {
  let history = useHistory();
  let location = useLocation();
  let auth = useAuth();

  let { from } = location.state || { from: { pathname: '/' } };

  let [userName, setUserName] = React.useState('');
  /*
  let login = () => {
    auth.signin(() => {
      history.replace(from);
    });
  };
  */

  function loginSubmitEventHandler(event) {
    //event.preventDefault();

    auth.signin(() => {
      history.replace(from);
    });

    localStorage.setItem(KEY_AUTHORIZED_USER_NAME, userName);

    console.log(
      'currentUserName: ',
      localStorage.getItem(KEY_AUTHORIZED_USER_NAME)
    );
  }

  //function saveIntoLocalStorage(event) {}

  return (
    <div>
      <form onSubmit={loginSubmitEventHandler}>
        <p>Вам необходимо авторизоваться {/*{from.pathname}*/}</p>
        <input
          type='text'
          placeholder='Введите имя пользователя'
          onChange={(event) => setUserName(event.target.value)}
        ></input>
        <p>
          <button
            style={{ height: '40px', width: '100px' }}
            //onClick={login}
            type='submit'
          >
            Вход
          </button>
        </p>
      </form>
    </div>
  );
}
