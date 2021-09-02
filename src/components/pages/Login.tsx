import React from 'react';
import CustomInput from '../UI/input/CustomInput';
import CustomButton from '../UI/button/CustomButton';
import AuthStore from '../stores/AuthStore';
import { observer } from 'mobx-react-lite';

/**
 * Страница авторизации
 */
const Login: React.FC = () => {
  const [userName, setUserName] = React.useState<string>('');
  const [userPassword, setUserPassword] = React.useState<string>('');

  const loginHandler = (event: React.FormEvent): void => {
    event.preventDefault();

    if (userName && userPassword) {
      AuthStore.logIn(userName, userPassword);
    }
  };

  return (
    <div>
      <h2 style={{ color: 'red' }}>
        {AuthStore.authState.onAccessDeniedMessage}
      </h2>
      <form onSubmit={loginHandler}>
        <h2>Вам необходимо авторизоваться:</h2>
        <CustomInput
          type='text'
          placeholder='Введите имя пользователя'
          onChange={(event) => setUserName(event.target.value.trim())}
        ></CustomInput>
        <CustomInput
          type='password'
          placeholder='Введите пароль'
          onChange={(event) => setUserPassword(event.target.value)}
        ></CustomInput>
        <p>
          <CustomButton
            style={{ height: '40px', width: '100px' }}
            type='submit'
          >
            Вход
          </CustomButton>
        </p>
      </form>
    </div>
  );
};

export default observer(Login);
