import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './SidebarContent';
import AppRouter from '../appRouter/AppRouter';
import { AuthContext } from '../context';

export default function BodyContent() {
  const [isAuth, setIsAuth] = React.useState(false);

  React.useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth: setIsAuth,
      }}
    >
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
    </AuthContext.Provider>
  );
}
