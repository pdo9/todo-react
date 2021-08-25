import React from 'react';
import { authContext } from './authContext';

const KEY_AUTHORIZED_USER_NAME = 'userName';

let currentUserName = !localStorage.getItem(KEY_AUTHORIZED_USER_NAME)
  ? undefined
  : localStorage.getItem(KEY_AUTHORIZED_USER_NAME);

export default function ProvideAuth({ children }) {
  const fakeAuth = {
    isAuthenticated: false,
    signin(cb) {
      fakeAuth.isAuthenticated = true;
      setTimeout(cb, 100);
    },
    signout(cb) {
      fakeAuth.isAuthenticated = false;
      setTimeout(cb, 100);
    },
  };

  function useProvideAuth() {
    const [user, setUser] = React.useState(currentUserName);

    const signin = (cb) => {
      return fakeAuth.signin(() => {
        setUser(currentUserName);
        cb();
        localStorage.setItem(KEY_AUTHORIZED_USER_NAME, currentUserName);
        //console.log('user logged in:', user);
      });
    };

    const signout = (cb) => {
      return fakeAuth.signout(() => {
        setUser(null);
        cb();
        localStorage.removeItem(KEY_AUTHORIZED_USER_NAME);
        //console.log('user logged out:', user);
      });
    };

    return {
      user,
      signin,
      signout,
    };
  }

  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
