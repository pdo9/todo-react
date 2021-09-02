import { makeAutoObservable } from 'mobx';
import { getAuthCredentials } from '../services/authService';
import { LOCALSTORAGE_KEYS } from '../utils/constants';

/**
 * Описание учетных данных авторизации
 */
export interface IAuthCredential {
  /**
   * Разрешен ли вход в систему
   */
  isAccessAllowed: boolean;

  /**
   * Статустные сообщения
   */
  statusMessage: string[];

  /**
   * ID пользователя
   */
  userID: number;

  /**
   * Имя пользователя
   */
  userName: string;

  /**
   * Пароль пользователя
   */
  userPassword: string;

  /**
   * Сообщение с причиной запрщенного доступа для вывода на страницу
   */
  onAccessDeniedMessage?: string;
}

/**
 * Авторизация в системе
 */
class AuthStore {
  /**
   * Текущее состояние авторизации
   */
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
  logIn = (userName: string, userPassword: string) => {
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
  logOut = () => {
    this.authState = {
      isAccessAllowed: false,
      statusMessage: [''],
      userID: -1,
      userName: '',
      userPassword: '',
    };
    localStorage.removeItem(LOCALSTORAGE_KEYS.KEY_AUTH);
  };
}

export default new AuthStore();
