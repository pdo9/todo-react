import React from 'react';
import CustomInput from '../../components_test/UI/input/CustomInput';
import CustomButton from '../../components_test/UI/button/CustomButton';
import { AuthContext } from '../context/authContext';

const Login = () => {
  const { isAuth, setIsAuth } = React.useContext(AuthContext);

  const loginHandler = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
  };

  return (
    <div>
      <form onSubmit={loginHandler}>
        <p>Вам необходимо авторизоваться {/*{from.pathname}*/}</p>
        <CustomInput
          type='text'
          placeholder='Введите имя пользователя'
          // onChange={(event) => setUserName(event.target.value)}
        ></CustomInput>
        <p>
          <CustomButton
            style={{ height: '40px', width: '100px' }}
            //onClick={login}
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
