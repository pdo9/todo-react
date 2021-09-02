import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './SidebarContent';
import AppRouter from '../appRouter/AppRouter';
// import { AuthContext } from '../context/authContext';
import AuthStore from '../stores/AuthStore';

const BodyContent: React.FC = () => {
  // const [isAuth, setIsAuth] = React.useState<boolean>(false);
  // const auth: IAuth = AuthStore.auth;

  React.useEffect(() => {
    // if (localStorage.getItem('auth')) {
    //   //setIsAuth(true);
    // }

    AuthStore.getAuthState();
  }, []);

  return (
    // <AuthContext.Provider
    //   value={{
    //     isAuth,
    //     setIsAuth,
    //   }}
    // >
    <BrowserRouter>
      <div className='main'>
        <div className='sidebar'>
          <Sidebar />
        </div>
        <div className='main-content'>
          <AppRouter />
        </div>
      </div>
    </BrowserRouter>
    // </AuthContext.Provider>
  );
};

export default BodyContent;
