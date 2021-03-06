import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Боковое меню
 */
const SidebarBase: React.FC = () => {
  return (
    <aside className='sidebar'>
      <nav className='nav'>
        <div>
          <Link className='nav-link' to='/'>
            На главную
          </Link>
        </div>
        <div>
          <Link className='nav-link' to='/about'>
            О сайте
          </Link>
        </div>
        <div>
          <Link className='nav-link' to='/login'>
            Авторизация
          </Link>
        </div>
        <div>
          <Link className='nav-link' to='/logout'>
            Выход
          </Link>
        </div>
      </nav>
    </aside>
  );
};

export default SidebarBase;
