import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './SidebarContent';
import AppRouter from '../appRouter/AppRouter';
import AuthStore from '../stores/AuthStore';

/**
 * Основной контент
 */
const BodyContent: React.FC = () => {
  React.useEffect(() => {
    AuthStore.getAuthState();
  }, []);

  return (
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
  );
};

export default BodyContent;
