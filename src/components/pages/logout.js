import React from 'react';
import CustomButton from '../../components_test/UI/button/CustomButton';
import { AuthContext } from '../context';

const Logout = () => {
  const { isAuth, setIsAuth } = React.useContext(AuthContext);
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  };

  return (
    <div>
      <CustomButton onClick={logout}>Выход</CustomButton>
    </div>
  );
};

export default Logout;
