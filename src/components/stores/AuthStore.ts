import { makeAutoObservable } from 'mobx';
import { getAuthCredentials } from '../services/authService';

export interface IAuthCredential {
  isAccessAllowed: boolean;
  statusMessage: string[];
  userID: number;
  userName: string;
  userPassword: string;
  onAccessDeniedMessage?: string;
}

class AuthStore {
  authState: IAuthCredential = {
    isAccessAllowed: false,
    statusMessage: [''],
    userID: -1,
    userName: '',
    userPassword: '',
  };

  constructor() {
    makeAutoObservable(this);
  }

  getAuthState = () => {
    const currentAuthState: IAuthCredential = JSON.parse(
      localStorage.getItem('auth') || '{}'
    );
    this.authState = currentAuthState;
  };

  logIn = (userName: string, userPassword: string) => {
    const authCredential = getAuthCredentials(userName, userPassword);
    console.log('authCredential:', authCredential);

    if (authCredential.isAccessAllowed) {
      localStorage.setItem('auth', JSON.stringify(authCredential));
      this.getAuthState();
    } else {
      this.authState.onAccessDeniedMessage =
        'Доступ запрещен. Проверьте правильность ввода имени пользователя и пароля.';
    }
  };

  logOut = () => {
    this.authState = {
      isAccessAllowed: false,
      statusMessage: [''],
      userID: -1,
      userName: '',
      userPassword: '',
    };
    localStorage.removeItem('auth');
  };
}

export default new AuthStore();
