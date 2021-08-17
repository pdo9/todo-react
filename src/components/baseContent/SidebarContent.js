import React from 'react';

export default function SidebarBase() {
  return (
    <aside className='sidebar'>
      <nav className='nav'>
        <a className='nav-link' href='/'>
          На главную
        </a>
        <a className='nav-link' href='/Login'>
          Авторизация
        </a>
        <a className='nav-link' href='Logout'>
          Выход
        </a>
      </nav>
    </aside>
  );
}
