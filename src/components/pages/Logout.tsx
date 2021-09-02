import React from 'react';
import CustomButton from '../UI/button/CustomButton';
import AuthStore from '../stores/AuthStore';

/**
 * Страница выхода из системы
 */
const Logout: React.FC = () => {
  const logout = (): void => {
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
