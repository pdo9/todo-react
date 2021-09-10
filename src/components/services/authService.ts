import { IAuthCredential } from '../stores/AuthStore';

/**
 * Сервис обработки ответа от сервера на введенные пользователем реквизиты
 * для входа (логин/пароль)
 *
 *
 */

/**
 * Описание пользователей
 */
interface IUser {
  userID: number;
  userName: string;
  userPassword: string;
}

/**
 * Зарегистрированные пользователи
 */
const registredUsers: IUser[] = [
  { userID: 1, userName: 'user1', userPassword: '1' },
  { userID: 2, userName: 'user2', userPassword: '1' },
  { userID: 3, userName: 'user3', userPassword: '1' },
];

/**
 * Проверка пользовательских данных на сервере
 */
export const getAuthCredentials = (
  userName: string,
  userPassword: string
): IAuthCredential => {
  let status: string[] = [];

  const currentUser: IUser | undefined = registredUsers.find(
    (item) => item.userName.toUpperCase() === userName.toUpperCase()
  );

  const isUserExists: boolean = Boolean(currentUser);
  isUserExists ? status.push('USER_EXISTS') : status.push('USER_NOT_FOUND');

  const isPasswordCorrect: boolean = currentUser?.userPassword === userPassword;
  isPasswordCorrect
    ? status.push('USER_PASSWORD_CORRECT')
    : status.push('USER_PASSWORD_INCORRECT');

  const authCredential: IAuthCredential = {
    isAccessAllowed: isUserExists && isPasswordCorrect,
    statusMessage: status,
    userID: currentUser?.userID || 0,
    userName: currentUser?.userName || '',
    userPassword: currentUser?.userPassword || '',
  };

  return authCredential;
};
