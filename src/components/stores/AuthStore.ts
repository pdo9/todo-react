// import React from 'react';
import { makeAutoObservable } from 'mobx';

export interface IAuth {
  userName?: string;
  isAuth: boolean;
  //setIsAuth: (isAuth: boolean) => void;
}

class AuthStore {
  auth: IAuth = { isAuth: false };

  /**
   *
   */
  constructor() {
    makeAutoObservable(this);
  }

  getAuth = () => {
    return this.auth;
  };

  logIn = () => {
    console.log('BEFORE logIn isAuth:', this.auth.isAuth);
    this.auth = { isAuth: true };
    localStorage.setItem('auth', 'true');
    console.log('AFTER logIn isAuth:', this.auth.isAuth);
  };

  logOut = () => {
    console.log('BEFORE logout isAuth:', this.auth.isAuth);
    this.auth = { isAuth: false };
    localStorage.removeItem('auth');
    console.log('AFTER logout isAuth:', this.auth.isAuth);
  };
}

export default new AuthStore();
