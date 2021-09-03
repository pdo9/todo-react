import { makeAutoObservable } from 'mobx';
import { getAuthCredentials } from '../services/authService';
import { LOCALSTORAGE_KEYS } from '../utils/constants';

/**
 * Описание учетных данных авторизации
 */
export interface IAuthCredential {
  isAccessAllowed: boolean;
  statusMessage: string[];
  userID: number;
  userName: string;
  userPassword: string;
  onAccessDeniedMessage?: string;
}

const authStateEmpty: IAuthCredential = {
  isAccessAllowed: false,
  statusMessage: [''],
  userID: -1,
  userName: '',
  userPassword: '',
};

/**
 * Авторизация в системе
 */
class AuthStore {
  /**
   * Текущее состояние авторизации
   */
  authState: IAuthCredential = authStateEmpty;

  constructor() {
    makeAutoObservable(this);
  }

  /**
   * Возвращает текущее состоянии авторизации
   */
  getAuthState = () => {
    const currentAuthState: IAuthCredential = JSON.parse(
      localStorage.getItem(LOCALSTORAGE_KEYS.KEY_AUTH) || '{}'
    );
    this.authState = currentAuthState;
  };

  /**
   * Вход в систему
   * @param userName Имя пользователя
   * @param userPassword Пароль пользователя
   */
  signIn = (userName: string, userPassword: string) => {
    const authCredential = getAuthCredentials(userName, userPassword);
    console.log('authCredential:', authCredential);

    if (authCredential.isAccessAllowed) {
      localStorage.setItem(
        LOCALSTORAGE_KEYS.KEY_AUTH,
        JSON.stringify(authCredential)
      );
      this.getAuthState();
    } else {
      this.authState.onAccessDeniedMessage =
        'Доступ запрещен. Проверьте правильность ввода имени пользователя и пароля.';
    }
  };

  /**
   * Выход из системы
   */
  signOut = () => {
    this.authState = authStateEmpty;
    localStorage.removeItem(LOCALSTORAGE_KEYS.KEY_AUTH);
  };
}

export default new AuthStore();
