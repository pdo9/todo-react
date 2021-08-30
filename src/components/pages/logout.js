import React from 'react';
import CustomButton from '../button/CustomButton';
import { AuthContext } from '../context/authContext';

const Logout = () => {
  const { isAuth, setIsAuth } = React.useContext(AuthContext);
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  };

  return (
    <div style={{ marginTop: '40px' }}>
      <CustomButton onClick={logout}>Выход</CustomButton>
    </div>
  );
};

export default Logout;
