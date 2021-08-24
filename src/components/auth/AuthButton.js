import React from 'react';
import {
  // BrowserRouter,
  // Switch,
  // Route,
  // Link,
  // Redirect,
  useHistory,
  // useLocation,
} from 'react-router-dom';

import useAuth from './useAuth';
//import { currentUserName } from './currentUserName';

const KEY_AUTHORIZED_USER_NAME = 'userName';

export default function AuthButton() {
  let history = useHistory();
  let auth = useAuth();

  console.log('history:', history);
  console.log('auth', auth);

  return auth.user ? (
    <p>
      Welcome, {localStorage.getItem(KEY_AUTHORIZED_USER_NAME)}!
      <button
        onClick={() => {
          auth.signout(() => history.push('/'));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}
