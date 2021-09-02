import React from 'react';
import CustomButton from '../button/CustomButton';
// import { TAuthContext, AuthContext } from '../context/authContext';
import AuthStore from '../stores/AuthStore';

const Logout: React.FC = () => {
  // const { setIsAuth } = React.useContext<TAuthContext>(AuthContext);
  const logout = (): void => {
    // setIsAuth(false);
    // localStorage.removeItem('auth');
    AuthStore.logOut();
  };

  return (
    <div style={{ marginTop: '30px' }}>
      <h2>Желаете выйти из системы, {AuthStore.authState.userName}?</h2>
      <CustomButton onClick={logout}>Выход</CustomButton>
    </div>
  );
};

export default Logout;
