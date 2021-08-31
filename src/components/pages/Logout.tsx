import React from 'react';
import CustomButton from '../button/CustomButton';
import { TAuthContext, AuthContext } from '../context/authContext';

const Logout: React.FC = (): React.ReactElement => {
  const { isAuth, setIsAuth } = React.useContext<TAuthContext>(AuthContext);
  const logout = (): void => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  };

  return (
    <div style={{ marginTop: '30px' }}>
      {/* <CustomButton onClick={logout}>Выход</CustomButton> */}
      <button onClick={logout}>Выход</button>
    </div>
  );
};

export default Logout;

// import React from 'react';
// import CustomButton from '../button/CustomButton';
// import { AuthContext } from '../context/authContext';

// const Logout = () => {
//   const { isAuth, setIsAuth } = React.useContext(AuthContext);
//   const logout = () => {
//     setIsAuth(false);
//     localStorage.removeItem('auth');
//   };

//   return (
//     <div style={{ marginTop: '30px' }}>
//       <CustomButton onClick={logout}>Выход</CustomButton>
//       {/* <button onClick={logout}>Выход</button> */}
//     </div>
//   );
// };

// export default Logout;
