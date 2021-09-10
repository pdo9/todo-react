import { makeAutoObservable } from 'mobx';
import { getAuthCredentials } from '../services/authService';
import { LOCALSTORAGE_KEYS } from '../utils/constants';
import { wait } from '../utils/utils';

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
  onAccessDeniedMessage: '',
};

/**
 * Авторизация в системе
 */
class AuthStore {
  /**
   * Текущее состояние авторизации
   */
  authState: IAuthCredential = authStateEmpty;

  isAuthChecking: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setIsAuthChecking = (isChecking: boolean) => {
    this.isAuthChecking = isChecking;
  };

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
  signIn = async (userName: string, userPassword: string) => {
    try {
      this.setIsAuthChecking(true);
      this.authState = authStateEmpty;

      await wait(2000);

      const authCredential: IAuthCredential = getAuthCredentials(
        userName,
        userPassword
      );

      authCredential.userPassword = '';

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
    } catch (error) {
      console.error(`Ошибка при авторизации: \n${error}`);
    } finally {
      this.setIsAuthChecking(false);
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
