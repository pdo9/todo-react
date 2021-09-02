// import React from 'react';
import { makeAutoObservable } from 'mobx';

export interface IAuth {
  isAuth: boolean;
  userName?: string;
  //setIsAuth: (isAuth: boolean) => void;
}

class AuthStore {
  auth: IAuth = { isAuth: false, userName: '' };

  /**
   *
   */
  constructor() {
    makeAutoObservable(this);
  }

  getAuth = () => {
    const auth: IAuth = JSON.parse(localStorage.getItem('auth') || '{}');
    this.auth = auth;
  };

  isLoggedIn = (): boolean => {
    return this.auth.isAuth;
  };

  logIn = (userName?: string) => {
    // console.log('BEFORE logIn isAuth:', this.auth.isAuth);
    // this.auth = { isAuth: true, userName: userName };
    // localStorage.setItem('auth', 'true');
    // console.log('AFTER logIn isAuth:', this.auth.isAuth);

    const newAuth: IAuth = { isAuth: true, userName: userName };
    localStorage.setItem('auth', JSON.stringify(newAuth));
    this.getAuth();
  };

  logOut = () => {
    this.auth = { isAuth: false, userName: '' };
    localStorage.removeItem('auth');
  };
}

export default new AuthStore();
