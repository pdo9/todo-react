import React from 'react';
import CustomInput from '../input/CustomInput';
import CustomButton from '../button/CustomButton';
// import { TAuthContext, AuthContext } from '../context/authContext';
import AuthStore, { IAuth } from '../stores/AuthStore';

const Login: React.FC = () => {
  // const { setIsAuth } = React.useContext<TAuthContext>(AuthContext);

  // const userName: string = '';
  const [userName, setUserName] = React.useState<string>('');

  const loginHandler = (event: React.FormEvent): void => {
    event.preventDefault();
    // setIsAuth(true);
    AuthStore.logIn(userName);
    // localStorage.setItem('auth', 'true');
    console.log('userName:', userName);
  };

  return (
    <div>
      <form onSubmit={loginHandler}>
        <p>Вам необходимо авторизоваться</p>
        <CustomInput
          type='text'
          placeholder='Введите имя пользователя'
          // onChange={(event) => setUserName(event.target.value)}
          onChange={(event) => setUserName(event.target.value)}
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

export default Login;
